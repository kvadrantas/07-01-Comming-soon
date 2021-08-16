class ProgressBars {
    constructor(className, data) {
        this.data = data;
        this.className = className;
        // console.log(data);
        this.render();
    }
    render() {
        let html = '';
        for (const value of this.data) {
            html += `
            <div class="progress-bar">
                <div class="top">
                      <div class="label">${value.label}</div>
                      <div class="value">${value.value}%</div>
                </div>
                    <div class="bottom">
                     <div class="fill" style = "width: ${value.value}%;"></div>
                </div>
            </div>`;
            // html += html1;
            // console.log('REIKSME: ', value.label);
        }
        // console.log(html);
        console.log('KLASE: ', this.className);
        let dom = document.querySelector(`.${this.className}`);
        dom.innerHTML += html;
    }
}

export {ProgressBars}
