const DepGraph = require("dependency-graph").DepGraph;

function findNavigationEntries(nodes = [], key = "") {
	let pages = [];
	for(let entry of nodes) {
		if(entry.data && entry.data.eleventyNavigation) {
			let nav = entry.data.eleventyNavigation;
			if(!key && !nav.parent || nav.parent === key) {
				pages.push(Object.assign({}, nav, {
					url: nav.url || entry.data.page.url,
					pluginType: "eleventy-navigation"
				}, key ? { parentKey: key } : {}));
			}
		}
	}

	return pages.sort(function(a, b) {
		return (a.order || 0) - (b.order || 0);
	}).map(function(entry) {
		if(!entry.title) {
			entry.title = entry.key;
		}
		if(entry.key) {
			entry.children = findNavigationEntries(nodes, entry.key);
		}
		return entry;
	});
}

function findDependencies(pages, depGraph, parentKey) {
	for( let page of pages ) {
		depGraph.addNode(page.key, page);
		if(parentKey) {
			depGraph.addDependency(page.key, parentKey);
		}
		if(page.children) {
			findDependencies(page.children, depGraph, page.key);
		}
	}
}

function getDependencyGraph(nodes) {
	let pages = findNavigationEntries(nodes);
	let graph = new DepGraph();
	findDependencies(pages, graph);
	return graph;
}

function findBreadcrumbEntries(nodes, activeKey, options = {}) {
	let graph = getDependencyGraph(nodes);
	let deps = graph.dependenciesOf(activeKey);
	deps.push(activeKey);

	return activeKey ? deps.map(key => {
		let data = Object.assign({}, graph.getNodeData(key));
		delete data.children;
		data._isBreadcrumb = true;
		return data;
	}) : [];
}

module.exports = {
    findBreadcrumbEntries
}