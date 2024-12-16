export function generateRandomX() {
    const minX = -30;
    const maxX = 30;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    return randomInRange(minX, maxX);
}

export function generateRandomZ() {
    const minZ = -30;
    const maxZ = 30;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    return randomInRange(minZ, maxZ);
}