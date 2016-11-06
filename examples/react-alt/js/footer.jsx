/*jshint quotmark:false */
/*jshint newcap:false */
/*global React */

var app = app || {};

(function () {
	'use strict';
	let TagFilter = app.TagFilter;
  let PriceFilter = app.PriceFilter;

	app.TodoFooter = React.createClass({
		render: function () {
			var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');

			// React idiom for shortcutting to `classSet` since it'll be used often
			var cx = React.addons.classSet;
			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className={cx({selected: nowShowing === app.ALL_TODOS})}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={cx({selected: nowShowing === app.ACTIVE_TODOS})}>
									Pending
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={cx({selected: nowShowing === app.COMPLETED_TODOS})}>
									In cart
							</a>
						</li>
					</ul>
					<TagFilter />
					<PriceFilter />
				</footer>
			);
		}
	});
})();
