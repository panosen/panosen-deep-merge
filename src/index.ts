export default class DeepMerge {

    static mergeObject<T>(...objects: Partial<T>[]): T {
        var item: Object = {};
        if (!objects) {
            return item as T;
        }

        for (var index = 0, length = objects.length; index < length; index++) {
            if (!(objects[index] instanceof Object)) {
                continue;
            }
            if (objects[index] instanceof Array) {
                continue;
            }
            this.mergeObjectItem(item, objects[index]);
        }

        return item as T;
    }

    private static mergeObjectItem(to: { [key: string]: any }, from: { [key: string]: any }): void {
        if (!from) {
            return
        }
        var keys = Object.keys(from);
        for (var index = 0, length = keys.length; index < length; index++) {
            var key = keys[index];
            var toValue = to[key];
            var fromValue = from[key];
            if (!toValue) {
                to[key] = fromValue;
                continue;
            }
            if (toValue instanceof Array && fromValue instanceof Array) {
                var newValue1 = this.mergeArray(toValue, fromValue);
                to[key] = newValue1;
                continue;
            }
            if (toValue instanceof Object && fromValue instanceof Object) {
                var newValue2 = this.mergeObject(toValue, fromValue);
                to[key] = newValue2;
                continue;
            }
            to[key] = fromValue;
        }
    }

    static mergeArray<T>(...arrays: T[][]): T[] {
        var items: T[] = [];
        if (!arrays) {
            return items;
        }

        for (var index = 0, length = arrays.length; index < length; index++) {
            this.mergeArrayItem(items, arrays[index]);
        }

        return items;
    }

    private static mergeArrayItem<T>(to: T[], from: T[]): void {
        if (!from) {
            return;
        }
        if (!(from instanceof Array)) {
            return;
        }
        to.push(...from);
    }
}