import React from 'react';
import SettingsPanel from './SettingsPanel';

const MainContent = () => {
	return (
		<bonaparte-scroll>
			<div>
				<div className="ui container">
					<h1>Napoleon Bonaparte</h1>
					<div className="ui grid">
						<div className="ten wide column">
							<p>Napoleon had fearlessly exposed himself to every peril during this conflict. His clothes were repeatedly pierced by bullets. Balls struck between the legs of his horse, covering him with earth. A cannon-ball took away a piece of the boot from his left leg and a portion of the skin, leaving a scar which was never obliterated.</p>
							<p>Before Napoleon Marched for Italy, he had made every effort in his power for the attainment of peace. Now, with magnanimity above all praise, without waiting for the first advance from his conquered foes, he wrote again imploring peace. Upon the field of Marengo, having scattered all his enemies like chaff before him, with the smoke of the conflict still darkening the air, and the groans of the dying swelling upon his ears, laying aside all the formalities of state, with heartfelt feeling and earnestness he wrote to the Emperor of Austria. This extraordinary epistle was thus commenced:</p>
							<p>"Sire! It is on the field of battle, amid the sufferings of a multitude of wounded, and surrounded by fifteen thousand corpses, that I beseech your majesty to listen to the voice of humanity, and not to suffer two brave nations to cut each others' throats for interests not their own. It is my part to press this upon your majesty, being upon the very theatre of war. Your majesty's heart can not feel it so keenly as does mine."</p>
							<p>The letter was long and most eloquent. "For what are you fighting?" said Napoleon. "For religion? Then make war on the Russians and the English who are the enemies of your faith. Do you wish to guard against revolutionary principles? It is this very war which has extended them over half the Continent, by extending the conquests of France. The continuance of the war can not fail to diffuse them still further. Is it for the balance of Europe? The English threaten that balance far more than does France, for they have become the masters and the tyrants of commerce, and are beyond the reach of resistance. Is it to secure the interests of the house of Austria! Let us then execute the treaty of Campo Formio, which secures to your majesty large indemnities in compensation for the provinces lost in the Netherlands, and secures them to you where you most wish to obtain them, that is, in Italy. Your majesty may send negotiators whither you will, and we will add to the treaty of Campo Formio stipulations calculated to assure you of the continued existence of the secondary states, of all which the French Republic is accused of having shaken. Upon these conditions pace is made, if you will. Let us make the armistice general for all the armies, and enter into negotiations instantly."</p>							
						</div>
						<div className="six wide column">
							<img className="ui fluid image" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg"} />
							<p className="small">The Emperor Napoleon in His Study at the Tuileries, by Jacques-Louis David, 1812</p>
						</div>
					</div>
				</div>
			</div>
			<SettingsPanel />
		</bonaparte-scroll>
	);
}
export default MainContent;