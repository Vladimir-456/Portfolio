import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useToast } from './ToastContext';

type FavoriteContextType = {
    favoriteIds: string[];
    toggleClickFavorite: (id: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({children} : {children: React.ReactNode}) => {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
    const {addToast} = useToast();

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteProjects');
        if (storedFavorites) {
          setFavoriteIds(JSON.parse(storedFavorites));
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('favoriteProjects', JSON.stringify(favoriteIds));
      }, [favoriteIds]);

    useEffect(() => {
        console.log(favoriteIds);
        if(favoriteIds.length === 0) return
        addToast('Проект добавлен в избранное!')
    }, [favoriteIds]);
    
/**
 * Toggle project favorite status by id.
 * If project with given id is already in favorites, remove it.
 * Otherwise, add it to favorites.
 * @param {string} id - project id
 */
    const toggleClickFavorite = (id: string) => {
        setFavoriteIds(prev => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
    };

    const value = useMemo<FavoriteContextType>(() => {
        return {
            favoriteIds,
            toggleClickFavorite,
        };
    }, [favoriteIds])

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>; 
}

export const useFavorites = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};