const dummyHeadlines = [
  'Dici enim nihil potest verius',
  'Videamus animi partes, quarum est conspectus illustrior',
  'Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.',
  'Nunc haec primum fortasse audientis servire debemus',
  'Primum in nostrane potestate est, quid meminerimus?',
  'Negare non possum',
  'Quid autem habent admirationis, cum prope accesseris?',
  'Illud dico, ea, quae dicat, praeclare inter se cohaerere'
]

const dummyParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo enim genera quae erant, fecit tria. Duo Reges: constructio interrete. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? Istam voluptatem perpetuam quis potest praestare sapienti? Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia.',
  'Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Quis istud possit, inquit, negare? Audeo dicere, inquit. Duae sunt enim res quoque, ne tu verba solum putes. Eam stabilem appellas. Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Nondum autem explanatum satis, erat, quid maxime natura vellet. Qui non moveatur et offensione turpitudinis et comprobatione honestatis?',
  'Et harum quidem rerum facilis est et expedita distinctio. Proclivi currit oratio. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Quid enim tanto opus est instrumento in optimis artibus comparandis?',
  'Respondent extrema primis, media utrisque, omnia omnibus. Itaque his sapiens semper vacabit. Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat. Quibusnam praeteritis? Vide, quaeso, rectumne sit. Id mihi magnum videtur. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Non dolere, inquam, istud quam vim habeat postea videro; Quod ea non occurrentia fingunt, vincunt Aristonem; De vacuitate doloris eadem sententia erit.',
  'Si id dicis, vicimus. Ego vero volo in virtute vim esse quam maximam; Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Honesta oratio, Socratica, Platonis etiam. Et ille ridens: Video, inquit, quid agas; Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? Sed residamus, inquit, si placet. Consequens enim est et post oritur, ut dixi.',
  'Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. Nulla erit controversia.',
  'Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Mihi enim erit isdem istis fortasse iam utendum. Ipse Epicurus fortasse redderet, ut Sextus Peducaeus, Sex. Atqui reperies, inquit, in hoc quidem pertinacem; Occultum facinus esse potuerit, gaudebit; Quo modo autem optimum, si bonum praeterea nullum est?',
  'Morbi pulvinar scelerisque volutpat. In ullamcorper elementum leo, ut volutpat odio facilisis sit amet. Etiam consectetur ultricies imperdiet. Maecenas eros magna, pretium et turpis ac, maximus tincidunt massa. Mauris et elit vehicula, laoreet dolor vel, porta magna. Phasellus euismod libero mi, sed vestibulum urna luctus id. Proin ac fermentum nunc. Suspendisse massa justo, scelerisque sit amet nunc sit amet, semper blandit mi. Etiam eget justo aliquam, ultrices augue ut, commodo purus.',
  'Vivamus condimentum ligula quis lectus feugiat, at ornare nisl facilisis. Quisque dictum purus et orci ornare tincidunt. Quisque elementum luctus interdum. Vestibulum ac risus pellentesque, pellentesque augue non, vulputate ante. Maecenas aliquet pretium eleifend. Donec ullamcorper massa ligula, eget ultrices nisl egestas nec. Nam sit amet laoreet diam. Aliquam eu orci at libero iaculis pretium. Donec elementum condimentum mi, sed dignissim sem elementum et. Cras finibus vehicula purus, ut condimentum ipsum posuere id. Donec eu dignissim eros.',
  'Lorem ipsum dolor sit amet, eos quem hendrerit cu, cu idque tritani mel. Munere aliquam eos no. Ex nostro referrentur sit. In cum dicta docendi dolores, vel patrioque dissentias te.',
  'Ei choro exerci constituam vis, ponderum intellegam nam an. Sea solet feugait eleifend ut. Zril mucius in nec, tota meis augue ei quo. Cu omnium graecis lucilius eos. Vel laudem veritus cu.'
]

export function randomDummyParagraph() {
  return dummyParagraphs[Math.floor(Math.random()*dummyParagraphs.length)]
}

export function randomDummyHeadline() {
  return dummyHeadlines[Math.floor(Math.random()*dummyHeadlines.length)]
}
