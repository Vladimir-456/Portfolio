import { useFavoriteStore } from "../../../store/useFavoriteStore"
import type { Project } from "../../../types/project"
import ProjectCard from "../../project-card/project-card"

type FavoriteListProps = {
    items: Project[]
}

const FavoriteList = ({items} : FavoriteListProps) => {
    const favoriteIds = useFavoriteStore(state => state.favoriteIds);
    const toggleClickFavorite = useFavoriteStore(state => state.toggleClickFavorite);
    const favoriteItems = items.filter(item => favoriteIds.includes(item.id));
    
    const handleClickFavorite = (evt: React.MouseEvent<HTMLImageElement>, id: string) => {
        evt.stopPropagation();
        toggleClickFavorite(id);
    }
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Ваши понравившиеся проекты</h1>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteItems.map((p, index) => 
                <ProjectCard key={index} 
                {...p} 
                type="favorite" 
                onClickFavorite={handleClickFavorite} />)}
            </div>
        </div>
    )
}

export default FavoriteList