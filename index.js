// Simple flat (non-recursive) merge of two objects
// Merge the src into the destination, overiding the destination fields that are shared;
// It is really only useful for merging simple configs and does no schema validation/checking. 

var merge = module.exports = function(src, dst) {
  Object.keys(src).forEach(function(key) {
    dst[key] = src[key];
  });
};
