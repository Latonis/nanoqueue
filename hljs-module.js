(function(){
	return function(){
		// message handler function
		this.hightlightBlock = function(data){

			var node = data.node.selector;

			if(data.canHighlight === true){
				hljs.highlightBlock(document.querySelector(node));
			}
		}

		// Get the global Singleton instance object
		// You can also use NanoQueue.getInstance()
		this.q = window._Q;

		// Subscribe to the specified topic, supplying the callback
		this.q.subscribeTo("dom.node.change", this.hightlightBlock);

	}
})();