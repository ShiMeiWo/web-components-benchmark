import HyperHTMLElement from '../node_modules/hyperhtml-element/esm/index.js';

let _length = 100;

function generateData(rows) {
    const n = rows;

    const data = [];
    data[0] = [1];
    data[1] = [1, 1];

    for (let row = 2; row < n; row++) {
        data[row] = [1];

        for (let col = 1; col <= row - 1; col++) {
            const prevRow = data[row - 1];
            data[row][col] = prevRow[col] + prevRow[col - 1];
            data[row].push(1);
        }
    }
    return data;
}

class PascalTriangle extends HyperHTMLElement {
    created() {
        this.attachShadow({
            mode: 'open'
        });
        this._length = _length;
        this._list = generateData(_length);
        this._handleLoad = e => this.handleLoad(e);
        this.render();
    }

    handleLoad(e) {
        this._length = parseInt(e.target.getAttribute('data-value'));
        this._list = generateData(this._length);
        this.render();
    }

    render() {
        return this.html `
<div>
    <button data-value="10" onclick=${this._handleLoad}>Load 10</button>
    <button data-value="100" onclick=${this._handleLoad}>Load 100</button>
    <button data-value="500" onclick=${this._handleLoad}>Load 500</button>
</div>
<div>
${
    this._list.map((line) => HyperHTMLElement.wire(line)`<div>
        ${
            line.map((item) => HyperHTMLElement.wire()`<triangle-item text="${item}"></triangle-item>`)
        }
    </div>`)
}
</div>`;
    }
}

PascalTriangle.define('pascal-triangle');