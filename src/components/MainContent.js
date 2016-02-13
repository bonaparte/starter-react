import React from 'react';
import SettingsPanel from './SettingsPanel';

const MainContent = () => {
	return (
		<bonaparte-scroll>
			<div>
				<div class="ui container">
					<h1>Bonaparte</h1>
					<div class="ui grid">
						<div class="ten wide column">
							<p>Bonaparte is the stage name of Berlin-based Swiss electronic rock songwriter and producer Tobias Jundt. Jundt is the only permanent member in the studio, collaborating with a changing cast of live musicians and performers when touring. Since 2006 Bonaparte performed over 500 shows worldwide a.o. in Europa, China, Russia, New Zealand or the USA.[1]</p>
							<p>The band is characterized by their expressive critically acclaimed live performances. German newspaper Der Tagesspiegel describes the band as "A multi-ethnic group ruled by the party-Kaiser; a trash circus unleashed".[2]</p>
							<p>The band is also known for its celebration of hedonism. Typical are a few lines from the album Too Much: "You know Tolstoy/I know Playboy [...]/You know politics/I know party-chicks [...]/You know too much too much." The Berliner Zeitung describes the band as "analoge Bohème," whilst the GZB makes reference to them as the best band in the world on a short track entitled "I want to party with the Bonaparte."[3]</p>
							<p class="small">[1] Bonaparte: Live History. In: bonaparte.cc.
							[2] Oberländer, Jan (28 October 2008). "Bonaparte: Blut, Schweiß und Würstchen". Der Tagesspiegel (in German).
							[3] Fust, Boris (8 October 2008). "Die analoge Bohème". Berliner Zeitung (in German). Archived from the original on 17 October 2008.</p>
						</div>
						<div class="six wide column">
							<img class="ui fluid image" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Bonaparte8.jpg" />
							<p class="small"><a href="www.arne-mueseler.de" target="_blank">© Arne Müseler / arne-mueseler.de / CC-BY-SA-3.0</a></p>
						</div>
					</div>
				</div>
			</div>
			<SettingsPanel />
		</bonaparte-scroll>
	);
}
export default MainContent;
