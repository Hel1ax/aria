import PodcastItem from "./PodcastItem";

function Podcasts() {
    return (
        <div className="podcasts-container">
            <PodcastItem podcastRequest='музыкальный подкаст интервью с музыкантами' podcastTitle="Интервью с музыкантами"></PodcastItem>
            <PodcastItem podcastRequest='саундтреки' podcastTitle="Саундтреки к фильмам и играм"></PodcastItem>
            <PodcastItem podcastRequest='Расслабляющая музыка' podcastTitle="Расслабляющая музыка"></PodcastItem>
            <PodcastItem podcastRequest='осенняя музыка' podcastTitle="Голос осени"></PodcastItem>
        </div>
    )
}

export default Podcasts;
