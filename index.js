function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var nested = document.getElementById('nested');
  return nested.querySelector('.target')
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  return node.querySelectorAll('*')[node.querySelectorAll('*').length-1]
}

/*function increaseRankBy(n){
			const rankLists = document.querySelectorAll('.ranked-list')
			const firstList = rankLists[0]
			const secondList = rankLists[1]

			let children = firstList.children
			for (let i=0,l=children.length;i<l;i++){
				children[i].innerHTML = parseInt(children[i].innerHTML)+n
			}
			children = secondList.children
			for(let i=0,l=children.length;i<l;i++){
				children[i].innerHTML = parseInt(children[i].innerHTML)+n
			}
	}*/

function increaseRankBy(n){
  var ranked = document.querySelectorAll('.ranked-list');
  for (let i =0, l=ranked.length;i<l;i++){
	  for (let j=0,k=ranked[i].children.length;j<k;j++){
  		  ranked[i].children[j].innerHTML = parseInt(ranked[i].children[j].innerHTML)+n
		 }
	 }
}
