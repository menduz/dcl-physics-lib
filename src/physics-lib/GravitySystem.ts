import { PhysicsComponent } from "./PhysicsComponent";

const tempVec3 = Vector3.Zero();

// Newtonw's gravitational constant
const G = 6.674e-11;

export class GravitySystem implements ISystem {
  group = engine.getComponentGroup(Transform, PhysicsComponent);

  update(deltaTime: number) {
    const dt = deltaTime * 150;
    for (let entity of this.group.entities) {
      const physics = entity.getComponent(PhysicsComponent);

      if (physics.rigid) continue;

      const transform = entity.getComponent(Transform);

      physics.acceleration.setAll(0);

      for (let e of this.group.entities) {
        if (e !== entity) {
          const positionE = e.getComponent(Transform).position;
          const physicsE = e.getComponent(PhysicsComponent);

          tempVec3.copyFrom(transform.position).subtractInPlace(positionE);

          const l = tempVec3.length();
          if (l !== 0) {
            const gravityForce =
              (G * (physicsE.mass * physics.mass)) / tempVec3.length();
            const delta = tempVec3.scale(-gravityForce);

            physics.acceleration.addInPlace(delta);
          }
        }
      }
      transform.lookAt(transform.position.add(physics.velocity));
      physics.velocity.addInPlace(physics.acceleration.scale(dt));
      transform.position.addInPlace(physics.velocity.scale(dt));
    }
  }
}
