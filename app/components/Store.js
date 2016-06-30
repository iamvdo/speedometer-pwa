/*
  Based on marklundin/react-localstorage-hoc
  Add `keys` parameters to store only desired keys, not whole state
*/

/*
  A higher order function that wraps a component with functionality
  that save's it's state to local storage. This means the components state
  will persist across page refreshes under the same domain and rules of localStorage.
*/

/*
  Global if localStorage is available on the system
*/

let hasLocalStorage = localStorage

if (hasLocalStorage) {
  let testKey = 'react-localstorage.hoc.test-key';
  try {
    // Access to global `localStorage` property must be guarded as it
    // fails under iOS private session mode.
    localStorage.setItem( testKey, 'foo' )
    localStorage.removeItem(testKey)
  } catch (e) {
    hasLocalStorage = false;
  }
}

/*
  A HOC function that accepts a component and wraps it in another Component that saves it's state to local storage
*/

let WrapWithLocalStorate = (Component, keys) => {

  // Return Component if no localStorage is available
  if( !hasLocalStorage ) return Component

  let name = Component.displayName;

  class LocalStorageComponent extends Component {

    constructor() {
      super();
      this.keys = keys;
    }

    componentWillMount() {
      const ls = localStorage.getItem(name);
      if (ls) {
        this.setState(JSON.parse(ls));
      }
    }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem(name, JSON.stringify(this._filterKeys(nextState)));
    }

    _filterKeys (state) {
      let newState = {};
      if (this.keys) {
        let obj = {};
        this.keys.map(k => obj[k] = state[k]);
        newState = obj;
      } else {
        newState = state;
      }
      return newState;
    }

  }

  LocalStorageComponent.displayName = name

  return LocalStorageComponent

}

export default  WrapWithLocalStorate
