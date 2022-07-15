module.exports = {
    nets: {
      A: undefined,
      B: undefined,
      C: undefined,
      D: undefined,
    },
    params: {
      class: 'TRRS',
      reverse: false,
    },
    body: p => {
      const standard = `
        (module 54-00176 (layer F.Cu) (tedit 5970F8E5)
  
        ${p.at /* parametric position */}   
        
        ${''/* stabilizers */}
        (pad "" np_thru_hole circle (at 10.5 0) (size 1.4 1.4) (drill 1.4) (layers *.Cu *.Mask))
      `

      function pins(pos, neg) {
        return `
          (pad 1 thru_hole oval (at 1.3 ${pos}2.9 ${p.rot}) (size 2.2 1.3) (drill oval 1.5 0.6) (layers *.Cu *.Mask) ${p.net.A.str})
          (pad 2 thru_hole oval (at 1.4 ${neg}2.2 ${p.rot}) (size 2.2 1.3) (drill oval 1.5 0.6) (layers *.Cu *.Mask) ${p.net.B.str})
          (pad 3 thru_hole oval (at 5.5 ${pos}2.6 ${p.rot}) (size 2.2 1.3) (drill oval 1.5 0.6) (layers *.Cu *.Mask) ${p.net.C.str})
          (pad 4 thru_hole oval (at 9.3 ${neg}2.6 ${p.rot}) (size 2.2 1.3) (drill oval 1.5 0.6) (layers *.Cu *.Mask) ${p.net.D.str})
          (pad 5 np_thru_hole oval (at 11.5 ${neg}1.8 ${p.rot}) (size 1.5 0.6) (drill oval 1.5 0.6) (layers *.Cu *.Mask))
          (pad 6 np_thru_hole oval (at 10.5 ${pos}2.6 ${p.rot}) (size 1.5 0.6) (drill oval 1.5 0.6) (layers *.Cu *.Mask))
        `
      }
      
      return `
        ${standard}
        ${p.param.reverse ? pins('-', '') : pins('', '-')})
      `
    }
  }
  