import React, { Fragment } from "react";

export default function Design() {
  return (
    <Fragment>
      <div className="columns margin-y-large">
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
      </div>

      <div className="columns margin-x-large">
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
      </div>

      <div className="columns columns--pull-left margin-y-large">
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
      </div>

      <div className="columns columns--pull-right margin-y-large">
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
        <div className="column">Foo bar bat</div>
      </div>

      <div className="columns margin-y-large">
        <div className="column column--25">25</div>
        <div className="column column--75">75</div>
      </div>

      <div className="columns columns--pull-right margin-y-large">
        <div className="column column--33">33</div>
        <div className="column">This column gets the remainder, in this case 66%</div>
      </div>

      <section class="breakout belaire">
        <div className="columns margin-y-large">
          <div className="column column--25">25</div>
          <div className="column column--75">75</div>
        </div>
      </section>
      
    </Fragment>
  );
}
