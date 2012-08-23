[![build status](https://secure.travis-ci.org/andrewjstone/flatmerge.png)](http://travis-ci.org/andrewjstone/flatmerge)
Simple flat (non-recursive) merge of two objects

## API

### merge(src, dst)
Return a new object resulting from the merge of ```src``` into ```dst```. 
Any shared fields in ```dst``` will be overidden by ```src``` values in the returned object.


