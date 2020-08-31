// simple system to check if an entity is inside the boundaries of a single parcel
export class BoundaryCheckSystem implements ISystem {
  group = engine.getComponentGroup(Transform);

  update() {
    for (let entity of this.group.entities) {
      const { position } = entity.getComponent(Transform);
      if (position.x > 15.5) position.x = 15.5;
      if (position.y > 15.5) position.y = 15.5;
      if (position.z > 15.5) position.z = 15.5;
      if (position.x < 0.5) position.x = 0.5;
      if (position.y < 0.5) position.y = 0.5;
      if (position.z < 0.5) position.z = 0.5;
    }
  }
}
