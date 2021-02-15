// TODO: make subjective decision of which may actually be used
const greekLetters = new Set([
  'alpha','beta','gamma','delta','zeta','eta','theta','iota','kappa','mu','nu',
  'xi','rho','sigma','tau','chi','psi','omega','phi','phiv','varphi','epsilon',
  'epsiv','varepsilon','piv','varpi','sigmaf','sigmav','varsigma','thetav',
  'vartheta','thetasym','upsilon','upsi','gammad','Gammad','digmma','kappav',
  'varkappa','rhov','varrho','pi','lambda','Upsilon','Upsi','upsih','Upsih',
  'Gamma','Delta','Theta','Lambda','Xi','Pi','Sigma','Phi','Psi','Omega',
  'forall'
])

const m = Math.max(...[...greekLetters].map(e => e.length))

function latexifyIdentifier(identifier) {
  // sanitize
  identifier = identifier
    .replace(/^[^a-zA-Z]+/, "")
    .replace(/[^a-zA-Z0-9]/g, "")

  if (identifier == "") {
    throw "Identifier consists of no valid characters"
  }

  // figure out two main parts
  let main = identifier[0]
  let sub = identifier.slice(1)

  // handle greek letters
  for (let i=1; i<=m; i++) {
    // i is the length we're searching for
    if (greekLetters.has(identifier.slice(0, i))) {
      if (identifier.length > i && identifier[i].match(/[a-z]/)) {
        continue;
      }
      main = "\\" + identifier.slice(0, i)
      sub = identifier.slice(i)
    }
  }
  if (sub == "") {
    return main
  } else {
    return `${main}_{${sub}}`
  }
}

export default class IdentifierGenerator {
  constructor() {
    this.identifierMapping = {}
    this.generatedIdentifiers = new Set()
  }

  nextIdentifier(name) {
    let gid = latexifyIdentifier(name)
    if (this.generatedIdentifiers.has(gid)) {
      // append to string until a new identifier is found
      for (let i=1; ; i++) {
        const testId = latexifyIdentifier(name + i)
        if (!this.generatedIdentifiers.has(testId)) {
          gid = testId
          break
        }
      }
    }
    this.generatedIdentifiers.add(gid)
    this.identifierMapping[name] = gid
    return gid
  }
}
