// hamburger component
export interface Ham {
  setShowMenu : React.Dispatch<React.SetStateAction<string>>,
  showMenu : string,
  setTranslateMenu : React.Dispatch<React.SetStateAction<string>>,
  translateMenu : string,

}

export interface Show {
  showMenu : string,
  translateMenu : string
}

// buttons

export interface Width {
  width? : string,
  padding? : string,
  text? : string,
  font? : string,
  tracking? :string,
  gap? : string,
  content? : string,
  icon? : JSX.Element,
  size? :string,
  bg? : string
}

//comments

export interface Data {
  width : string,
  name : string,
  content : string,
  comp1? : JSX.Element,
  comp2? : JSX.Element,
  comp3? : JSX.Element,
}

// awardWinning

export interface Award {
  img : string,
  header : string,
  content : string,
  btncontent : string
}

// freqAskedQue

export interface Ques {
  question : string,
  answer : string,
}

export interface Ans {
  ans0 : boolean,
  ans1 : boolean
  ans2 : boolean
  ans3 : boolean
  ans4 : boolean
  ans5 : boolean
  ans6 : boolean
}


export interface Ans1 {
  ans7 : boolean
  ans8 : boolean
  ans9 : boolean
  ans10 : boolean
  ans11: boolean
  ans12 : boolean
}