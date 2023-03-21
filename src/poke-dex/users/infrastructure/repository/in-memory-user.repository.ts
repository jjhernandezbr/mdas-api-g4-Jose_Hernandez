import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";
import UserAggregate from "../../domain/user.aggregate";
import { UserId } from "../../domain/value-objects";
import { PokemonId } from "../../../pokemons/domain/value-objects";

class InMemoryUserRepository implements UserRepositoryInterface {
  private users: UserAggregate[] = [];

  save(user: UserAggregate): void {
    this.users.push(user);
  }

  addFavouritePokemon(userId: UserId, pokemonId: PokemonId): void {
    const user = this.users.find((user) => user.getId() === userId);
    if (user) {
      user.addFavouritePokemon(pokemonId);
    }
  }

  findUserById(userId: UserId): UserAggregate | undefined {
    return this.users.find((user) => user.getId().value === userId.value);
  }
}

export default InMemoryUserRepository;
