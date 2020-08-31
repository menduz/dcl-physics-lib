@Component("physics.component")
export class PhysicsComponent {
  velocity = Vector3.Zero();
  acceleration = Vector3.Zero();

  mass: number = 0;

  rigid: boolean = false;
}
