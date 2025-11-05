import Particles from './particles';
import Rule from './rule';

class Rules {
  private rules: Array<Rule>;

  constructor(rules: Array<Rule> = Array<Rule>()) {
    this.rules = rules;
  }

  clone = () => {
    const rulesNew = this.rules.map((rule: Rule) => {
      return rule.clone();
    });

    return new Rules(rulesNew);
  };

  applyTo = (particles: Particles) => {
    this.rules.forEach((rule: Rule) => {
      particles.applyRule(rule);
    });
  };
}

export default Rules;
