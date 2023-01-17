const PlotCard = require('../../plotcard');
const GameActions = require('../../GameActions');

class ThePrinceWhoCameTooLate extends PlotCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Search your deck',
            phase: 'standing',
            limit: ability.limit.perRound(1),
            message: '{player} uses {source} to search their deck for a character',
            gameAction: GameActions.search({
                title: 'Select a character',
                match: { type: 'character' },
                message: '{player} {gameAction}',
                gameAction: GameActions.putIntoPlay(context => ({
                    card: context.searchTarget
                }))
            })
        });
    }
}

ThePrinceWhoCameTooLate.code = '15052';

module.exports = ThePrinceWhoCameTooLate;
