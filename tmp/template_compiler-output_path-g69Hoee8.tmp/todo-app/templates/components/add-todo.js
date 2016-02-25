export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "modifiers",
        "modifiers": [
          "action"
        ]
      },
      "revision": "Ember@2.3.0",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 0
        }
      },
      "moduleName": "todo-app/templates/components/add-todo.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","submit");
      var el3 = dom.createTextNode("OK");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(element0,1,1);
      return morphs;
    },
    statements: [
      ["element","action",["submit"],["on","submit"],["loc",[null,[1,6],[1,37]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","text",["loc",[null,[2,16],[2,20]]]]],[],[]]],["loc",[null,[2,2],[2,22]]]]
    ],
    locals: [],
    templates: []
  };
}()));