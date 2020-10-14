import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Aplikasi React',
            subsTitle: 'Sugeng Rawuh Dulur'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subsTitle}</p>
            </div>
        );
    }
}

export default Title;