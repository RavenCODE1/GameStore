import { AppDataSource } from "./data-source";
import { Genre } from "./entity/Genre"
import { Game } from "./entity/Game"
import { Availability } from "./entity/Availability"
import { Platform } from "./entity/Platform"
async function seedDatabase() {

      await AppDataSource.initialize();
  
      console.log("Seeding the database...");
  
      const platforms = [
        { platformName: "PlayStation 5" },
        { platformName: "Xbox Series X" },
        { platformName: "Nintendo Switch" },
        { platformName: "PC" },
        { platformName: "Mobile" },
      ];
      const savedPlatforms = await Promise.all(
        platforms.map(async (platformData) => {
          const platform = new Platform();
          Object.assign(platform, platformData);
          return await AppDataSource.manager.save(platform);
        })
      );
  
      console.log("Platforms added:", savedPlatforms);
      const genres = [
        { genreName: "Action" },
        { genreName: "Adventure" },
        { genreName: "RPG" },
        { genreName: "Strategy" },
        { genreName: "Simulation" },
        { genreName: "Sports" },
        { genreName: "Racing" },
        { genreName: "Puzzle" },
        { genreName: "Platformer" },
        { genreName: "Shooter" },
      ];
      const savedGenres = await Promise.all(
        genres.map(async (genreData) => {
          const genre = new Genre();
          Object.assign(genre, genreData);
          return await AppDataSource.manager.save(genre);
        })
      );
  
      console.log("Genres added:", savedGenres);

      const availabilities = [
        { availabilityStatus: "In Stock" },
        { availabilityStatus: "Out of Stock" },
        { availabilityStatus: "Pre-order" },
      ];
      const savedAvailabilities = await Promise.all(
        availabilities.map(async (availabilityData) => {
          const availability = new Availability();
          Object.assign(availability, availabilityData);
          return await AppDataSource.manager.save(availability);
        })
      );
  
      console.log("Availability statuses added:", savedAvailabilities);
  
      const games = [
        {
          gameName: "Elden Ring",
          releaseYear: 2022,
          price: 59.99,
          genre: savedGenres[0].genreName,
          availability: savedAvailabilities[0].availabilityStatus, 
          platformIds: [savedPlatforms[0].platformId, savedPlatforms[1].platformId], 
        },
        {
          gameName: "The Legend of Zelda: Breath of the Wild",
          releaseYear: 2017,
          price: 39.99,
          genre: savedGenres[1].genreName, 
          availability: savedAvailabilities[1].availabilityStatus, 
          platformIds: [savedPlatforms[2].platformId], 
        },
        {
          gameName: "Disco Elysium",
          releaseYear: 2019,
          price: 29.99,
          genre: savedGenres[6].genreName, 
          availability: savedAvailabilities[2].availabilityStatus,
          platformIds: [savedPlatforms[3].platformId, savedPlatforms[4].platformId], 
        },
      ];
}
