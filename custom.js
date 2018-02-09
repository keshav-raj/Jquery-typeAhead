var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Andhra Pradesh (AP)',
'Arunachal Pradesh (AR)',
'Assam (AS)',
'Bihar (BR)',
'Chhattisgarh (CG)',
'Goa (GA)',
'Gujarat (GJ)',
'Haryana (HR)',
'Himachal Pradesh (HP)',
'Jammu and Kashmir (JK)',
'Jharkhand (JH)',
'Karnataka (KA)',
'Kerala (KL)',
'Madhya Pradesh (MP)',
'Maharashtra (MH)',
'Manipur (MN)',
'Meghalaya (ML)',
'Mizoram (MZ)',
'Nagaland (NL)',
'Odisha(OR)',
'Punjab (PB)',
'Rajasthan (RJ)',
'Sikkim (SK)',
'Tamil Nadu (TN)',
'Telangana (TS)',
'Tripura (TR)',
'Uttar Pradesh (UP)',
'Uttarakhand (UK)',
'West Bengal (WB)'


];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});