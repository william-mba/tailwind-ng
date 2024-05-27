
export function benchmark(callback: CallableFunction, prefix: string) {
    const startStr = `${prefix}-start`;
    const endStr = `${prefix}-end`;
    performance.mark(startStr);
    for (let i = 0; i <= 10; i++) {
        callback();
    }
    performance.mark(endStr);
    console.log('Duration:', performance.measure(prefix, startStr, endStr).duration, 'Name:', performance.measure(prefix, startStr, endStr).name);
}