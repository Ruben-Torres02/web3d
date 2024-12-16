export function generateRandomX() {
    const minX = -40;
    const maxX = 10;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    return randomInRange(minX, maxX);
}

export function generateRandomZ() {
    const minZ = -40;
    const maxZ = 8;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    return randomInRange(minZ, maxZ);
}