// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class HelloStore {
  @observable name: string;
  @observable count: number;
  constructor() {
    this.name = 'React with Typescript';
    this.count = 0;

    setInterval(() => this.count += 1, 1000);
  }
}

const helloStore = new HelloStore();
interface HelloProps {
  store: HelloStore;
}

// tslint:disable-next-line:variable-name
const Hello: React.SFC<HelloProps> = props => (
  <div>Hello {props.store.name} {props.store.count}!</div>
);
// tslint:disable-next-line:variable-name
const DecoratedHello = observer(Hello);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DecoratedHello store={helloStore} />,
    document.body.appendChild(document.createElement('div'))
  );
});
