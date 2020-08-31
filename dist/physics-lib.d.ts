/// <reference types="dcl" />
declare module "physics-lib/PhysicsComponent" {
    export class PhysicsComponent {
        velocity: Vector3;
        acceleration: Vector3;
        mass: number;
        rigid: boolean;
    }
}
declare module "physics-lib/GravitySystem" {
    export class GravitySystem implements ISystem {
        group: ComponentGroup;
        update(deltaTime: number): void;
    }
}
declare module "physics-lib/BoundaryCheckSystem" {
    export class BoundaryCheckSystem implements ISystem {
        group: ComponentGroup;
        update(): void;
    }
}
declare module "physics-lib" {
    import { PhysicsComponent } from "physics-lib/PhysicsComponent";
    import { GravitySystem } from "physics-lib/GravitySystem";
    import { BoundaryCheckSystem } from "physics-lib/BoundaryCheckSystem";
    export { PhysicsComponent, GravitySystem, BoundaryCheckSystem };
}
