export default {
	language: 'Italiano',
	'$vuetify': {
		badge: 'Badge',
		close: 'Chiudi',
		dataIterator: {
			noResultsText: 'Nessun risultato trovato',
			loadingText: 'Caricamento elementi...',
		},
		dataTable: {
			itemsPerPageText: 'Righe per pagina:',
			ariaLabel: {
				sortDescending: 'Ordinato decrescente.',
				sortAscending: 'Ordinato crescente.',
				sortNone: 'Non ordinato.',
				activateNone: 'Attiva per rimuovere l\'ordinamento.',
				activateDescending: 'Attiva per ordinare in modo decrescente.',
				activateAscending: 'Attiva per ordinare in modo crescente.',
			},
			sortBy: 'Ordina per',
		},
		dataFooter: {
			itemsPerPageText: 'Elementi per pagina:',
			itemsPerPageAll: 'Tutto',
			nextPage: 'Prossima pagina',
			prevPage: 'Pagina precedente',
			firstPage: 'Prima pagina',
			lastPage: 'Ultima pagina',
			pageText: '{0}-{1} di {2}',
		},
		datePicker: {
			itemsSelected: '{0} selezionato',
		},
		noDataText: 'Nessun dato disponibile',
		carousel: {
			prev: 'Visuale precedente',
			next: 'Prossima visuale',
			ariaLabel: {
				delimiter: 'Diapositiva carosello {0} di {1}',
			},
		},
		calendar: {
			moreEvents: '{0} ancora',
		},
		fileInput: {
			counter: '{0} file',
			counterSize: '{0} file ({1} in tutto)',
		},
		timePicker: {
			am: 'AM',
			pm: 'PM',
		},
	},
	button: {
		add: {
			caption: 'Aggiungi'
		},
		connect: {
			connect: 'Connetti',
			connecting: 'Connettendo...',
			disconnect: 'Disconnetti',
			disconnecting: 'Disconnettendo...'
		},
		emergencyStop: {
			caption: 'Stop di emergenza',
			title: 'Forza il reset software immediato (M112+M999)'
		},
		home: {
			caption: 'Home {0}',
			captionAll: 'Home tutto',
			title: 'Home dell\'asse {0} (G28 {0})',
			titleAll: 'Home di tutti gli assi (G28)'
		},
		newDirectory: {
			caption: 'Nuova cartella'
		},
		newFilament: {
			caption: 'Nuovo filamento'
		},
		newFile: {
			caption: 'Nuovo File'
		},
		refresh: {
			caption: 'Ricarica'
		},
		reset: {
			caption: 'Reset Macchina',
			title: 'Invia M999 alla macchina per resettarla'
		},
		upload: {
			gcodes: {
				caption: 'Carica File G-Code',
				title: 'Upload one or more G-Code files (drag&drop is supported as well)'
			},
			start: {
				caption: 'Carica & Avvia',
				title: 'Carica & Avvia uno o più file G-Code (il trascinamento è supportato)'
			},
			macros: {
				caption: 'Carica File Macro',
				title: 'Carica uno o più file macro (il trascinamento è supportato)'
			},
			filaments: {
				caption: 'Carica configurazione filamento',
				title: 'Carica una o più configurazioni filamento (il trascinamento è supportato)'
			},
			menu: {
				caption: 'Carica file Menu',
				title: 'Carica uno o più file Menu (il trascinamento è supportato)'
			},
			system: {
				caption: 'Carica file di sistema',
				title: 'Carica uno o più file di sistema (il trascinamento è supportato)'
			},
			web: {
				caption: 'Carica file web',
				title: 'Carica uno o più file web (il trascinamento è supportato)'
			},
			update: {
				caption: 'Carica aggiornamento',
				title: 'Carica un pacchetto di aggiornamento (il trascinamento è supportato)'
			}
		}
	},
	chart: {
		layer: {
			caption: 'Grafico degli strati',
			layerTime: 'Tempo strato',

			showLastLayers: 'Mostra ultimi {0} strati',
			showAllLayers: 'Mostra tutti gli strati',

			layer: 'Layer {0}',
			layerDuration: 'Durata: {0}',
			layerHeight: 'Altezza strato: {0}',
			filamentUsage: 'Uso del filamento: {0}',
			fractionPrinted: 'Progresso del file: {0}'
		},
		temperature: {
			caption: 'Grafico della temperatura',
			heater: 'Riscaldatore {0}',
			noData: 'Nessun dato'
		}
	},
	dialog: {
		changeMoveStep: {
			title: 'Change move step',
			prompt: 'Please enter a new value for the clicked move button:'
		},
		configUpdated: {
			title: 'Ripristinare la scheda?',
			prompt: 'Vuoi riavviare la scheda per applicare la configurazione caricata?'
		},
		connect: {
			title: 'Connetti alla macchina',
			prompt: 'Per favore inserisci hostname e password della macchina a cui vuoi connetterti:',
			hostPlaceholder: 'Hostname',
			hostRequired: 'L\'hostname è richiesto',
			passwordPlaceholderOptional: 'Password (opzionale)',
			passwordPlaceholder: 'Password',
			passwordRequired: 'La password è richiesta',
			connect: 'Connetti'
		},
		connection: {
			connecting: 'Connessione...',
			disconnecting: 'Disconnessione...',
			updating: 'Per favore attendi mentre l\'aggiornamento viene installato...',
			reconnecting: 'Connessione persa, tentativo di riconnessione...',
			standBy: 'Per favore attendi...'
		},
		editExtrusionAmount: {
			title: 'Modifica quantità estrusione',
			prompt: 'Per favore inserisci una nuova quantità per il pulsante premuto:'
		},
		editExtrusionFeedrate: {
			title: 'Modifica flusso di stampa',	// TODO: need review
			prompt: 'Per favore inserisci un nuovo flusso di stampa per il pulsante premuto'
		},
		factoryReset: {
			title: 'Eseguire ripristino di fabbrica?',
			prompt: 'Sei sicuro di voler eseguire un ripristino di fabbrica? Tutte le impostazioni salvate verranno perse.'
		},
		filament: {
			titleChange: 'Cambia filamento',
			titleLoad: 'Carica filamento',
			prompt: 'Per favore aggiungi un filamento:'
		},
		fileEdit: {
			gcodeReference: 'Riferimento G-Code',
			menuReference: 'Menu Riferimento',
			save: 'Salva',
			confirmClose: 'Il file è stato modificato. Se procedi le modifiche verranno perse.'
		},
		meshEdit: {
			title: 'Imposta parametri mesh',
			radius: 'Raggio sonda',
			spacing: 'Spaziatura',
			startCoordinate: 'Coordinata iniziale nella direzione {0}',
			endCoordinate: 'Coordinata finale nella direzione {0}',
			spacingDirection: 'Spaziamento nella direzione {0}'
		},
		newDirectory: {
			title: 'Nuova cartella',
			prompt: 'Per favore inserisci un nome per la nuova cartella:'
		},
		newFilament: {
			title: 'Nuovo filamento',
			prompt: 'Per favore inserisci un nome per il nuovo filamento:'
		},
		newFile: {
			title: 'Nuovo file',
			prompt: 'Per favore inserisci un nome per il nuovo file:'
		},
		renameFile: {
			title: 'Rinomina file o cartella',
			prompt: 'Per favore inserisci un nuovo nome:'
		},
		resetHeaterFault: {
			title: 'Ripristina guasto riscaldatore',
			prompt: 'Si è verificato un guasto nel riscaldatore {0}. Si raccomanda fortemente di spegnere la macchina ora e controllarne il cablaggio prima di continuare. Se sei assolutamente sicuro che non si tratta di un problema fisico, puoi resettare il guasto A TUO UNICO RISCHIO. Sii consapevole che NON È RACCOMANDATO e può portare ad ulteriori problemi. Vuoi procedere?',
			resetFault: 'Ripristina guasto'
		},
		runMacro: {
			title: 'Avvia {0}',
			prompt: 'Vuoi avviare {0}?'
		},
		startJob: {
			title: 'Avvia {0}',
			prompt: 'Vuoi avviare {0}?'
		},
		update: {
			title: 'Installare aggiornamenti?',
			prompt: 'Hai caricamento almeno un aggiornamento del firmware. Vuoi installarlo ora?'
		},
		inputRequired: 'Per favore inserisci un valore',
		numberRequired: 'Per favore inserisci un numero valido'
	},
	directory: {
		menu: 'Menu cartella',
		filaments: 'Cartella filamenti',
		gcodes: 'Cartella G-Code',
		macros: 'Cartella Macro',
		system: 'Cartella di sistema',
		web: 'Cartella Web'
	},
	error: {
		notImplemented: '{0} non è implementato',
		invalidPassword: 'Passowrd non valida!',
		noFreeSession: 'Non ci sono più sessioni libere!',
		connect: 'Errore nella connessione {0}',
		disconnect: 'Impossibile disconnettersi correttamente da {0}',
		disconnected: 'Impossibile completare l\'azione perché la connessione è terminata',
		cancelled: 'L\'operazione è stata cancellata',
		network: 'Errore di rete',
		timeout: 'Richiesta HTTP scaduta',
		driveUnmounted: 'L\'unità di destinazione non è montata',
		directoryNotFound: 'Cartella {0} non trovata',
		fileNotFound: 'File {0} non trovato',
		invalidHeightmap: 'Mappa altezze non valida',
		operationFailed: 'Operazion fallita (Motivo: {0})',
		uploadStartWrongFileCount: 'Solo un singolo file può essere caricato e avviato',
		uploadNoSingleZIP: 'Può essere caricato solo un singolo file ZIP alla volta',
		uploadNoFiles: 'Questo ZIP non contiene nessun file utilizzabile',
		uploadDecompressionFailed: 'Impossibile decomprimere il file ZIP',
		codeResponse: 'Non posso eseguire il codice perché è stata ricevuta una risposta non valida',
		codeBuffer: 'Non posso avviare il codice perché è esaurito lo spazio nel buffer',
		enterValidNumber: 'Per favore inserisci un numero valido',
		turnOffEverythingFailed: 'Errore nello spegnimento completo',
		filelistRequestFailed: 'Errore nella ricezione della lista dei file',
		fileinfoRequestFailed: 'Errore nella ricezione delle informazioni del file {0}',
		filamentsLoadFailed: 'Errore nel caricamento dei filamenti',
		move: 'Impossibile spostare {0} in {1}'
	},
	events: {
		connected: 'Connesso a {0}',
		connectionLost: 'Impossibile mantenere la connessione a {0}',
		emergencyStop: 'Stop di emergenza, tentativo di riconnessione...',
		reconnecting: 'Connessione interrotta, tentativo di riconnessione...',
		reconnected: 'Connessione stabilita',
		disconnected: 'Disconnesso da {0}'
	},
	generic: {
		ok: 'OK',
		cancel: 'Annulla',
		yes: 'Si',
		no: 'No',
		close: 'Chiudi',
		reset: 'Ripristina',
		noValue: 'n/v',
		loading: 'caricamento',
		error: 'Errore',
		info: 'Informazione',
		warning: 'Avvertenza',
		success: 'Successo',
		heaterStates: {
			off: 'spento',
			standby: 'in attesa',
			active: 'acceso',
			fault: 'guasto',
			tuning: 'calibrando',
			offline: 'offline'
		},
		status: {
			updating: 'Aggiornamento',
			off: 'Off',
			halted: 'Fermato',
			pausing: 'Mettendo in pausa',
			paused: 'In pausa',
			resuming: 'Riprendendo',
			printing: 'Stampando',
			processing: 'Processando',
			simulating: 'Simulando',
			busy: 'Impegnato',
			changingTool: 'Cambio Attrezzo',
			idle: 'In attesa',
			unknown: 'Sconosciuto'
		},
		rpm: 'RPM',
		sdCard: 'Scheda SD {0}',
		mounted: 'montato',
		notMounted: 'non montato',
		extracting: 'Estraendo',
		uploading: 'Caricando',
		active: 'Attivo',
		standby: 'In attesa'
	},
	input: {
		code: {
			send: 'Invia',
			placeholder: 'Invia codice...'
		},
		addTemperature: 'Valore della nuova temperatura',
		addRPM: 'Valore del nuovo preset'
	},
	jobProgress: {
		simulating: 'Simulando {0}, {1} completato',
		simulated: 'Simulato {0}, 100 % completato',
		processing: 'Processando {0}, {1} completato',
		processed: 'Processato {0}, 100 % completato',
		printing: 'Stampando {0}, {1} completato',
		printed: 'Stampato {0}, 100 % completato',
		noJob: 'Nessun lavoro avviato.',
		layer: 'Strato {0} di {1}',
		filament: 'Uso filamento: {0}',
		filamentRemaining: '{0} rimanente'
	},
	list: {
		baseFileList: {
			fileName: 'Nome del file',
			size: 'Dimensione',
			lastModified: 'Ultima modifica',
			download: 'Scarica file',
			edit: 'Modifica file',
			rename: 'Rinomina',
			delete: 'Cancella',
			downloadZIP: 'Scarica come ZIP',
			noFiles: 'Nessun file o cartella',
			driveUnmounted: 'L\'unità non è montata',
			goUp: 'Vai su'
		},
		menu: {
			noFiles: 'Nessun file mostrato'
		},
		eventLog: {
			date: 'Data',
			type: 'Tipo',
			message: 'Evento',
			noEvents: 'Nessun evento',
			clear: 'Pulisci',
			downloadText: 'Scarica come testo',
			downloadCSV: 'Scarica come CSV'
		},
		filament: {
			noFilaments: 'Nessun filamento'
		},
		macro: {
			caption: 'Macro',
			noMacros: 'Nessuna macro',
			run: 'Avvia macro',
			root: 'Root'
		},
		jobs: {
			height: 'Altezza oggetto',
			layerHeight: 'Strati oggetto',
			filament: 'Uso filamento',
			printTime: 'Tempo di stampa',
			simulatedTime: 'Tempo simulato',
			generatedBy: 'Generato da',

			noJobs: 'Nessun lavoro',
			start: 'Avvia file',
			simulate: 'Simula file'
		},
		system: {
			noFiles: 'Nessun file di sistema',
			configToolNote: 'modifica tramite strumento di configurazione'
		}
	},
	menu: {
		control: {
			caption: 'Controllo macchina',
			dashboard: 'Pannello di controllo',
			console: 'Console',
			heightmap: 'Mappa altezza'
		},
		job: {
			caption: 'Lavoro corrente',
			status: 'Stato',
			webcam: 'Webcam',
			visualiser: 'Visualizzatore'
		},
		files: {
			caption: 'Gestione file',
			jobs: 'Lavori',
			filaments: 'Filamenti',
			macros: 'Macro',
			menu: 'Schermo',
			system: 'Sistema',
			web: 'Web'
		},
		settings: {
			caption: 'Impostazioni',
			general: 'Generali',
			machine: 'Specifiche della macchina',
			update: 'Aggiorna'
		}
	},
	notification: {
		compress: {
			title: 'Compressione file...',
			message: 'Per favore attendi mentre i tuoi file vengono compressi...',
			errorTitle: 'Errure durante la compressione'
		},
		delete: {
			errorTitle: 'Errore durante l\'eliminazione {0}',
			errorMessageDirectory: 'Per favore assicurati che la cartella sia vuota',
			success: 'Eliminato con successo {0}',
			successMultiple: 'Eliminati con successo {0} elementi'
		},
		deleteFilament: {
			errorTitle: 'Errore nella cancellazione filamento/i',
			errorStillLoaded: 'Almeno un filamento selezionato è ancora in uso. Per favore scarica il filamento prima di procedere',
			errorSubDirectories: 'Il filamento {0} contiene sottocartelle. Per favore eliminale manualmente e riprova.'
		},
		download: {
			title: 'Scaricando {0} @ {1}, {2}% completato',
			message: 'Per favore attendi mentre il file viene scaricato...',
			success: 'Scaricamento di {0} riuscito dopo {1}',
			successMulti: 'Scaricato con successo {0} file',
			error: 'Scaricamento fallito {0}'
		},
		message: 'Messaggio',
		mount: {
			successTitle: 'Scheda SD montata',
			errorTitle: 'Errore durante il montaggio della scheda SD'
		},
		newDirectory: {
			errorTitle: 'Creazione cartella fallita',
			successTitle: 'Cartella creata',
			successMessage: 'Cartella {0} creata con successo'
		},
		newFilament: {
			errorTitle: 'Creazione filamento fallita',
			errorTitleMacros: 'Errore nella creazione della macro filamento',
			successTitle: 'Filamento creato',
			successMessage: 'Creato con successo il filamento {0}'
		},
		rename: {
			success: 'Rinominato {0} in {1} con successo',
			error: 'Errore nel rinominare {0} in {1}',
		},
		renameFilament: {
			errorTitle: 'Errore nel rinominare il filamento',
			errorStillLoaded: 'Questo filamento è ancora in uso. Per favore scaricalo prima di procedere'
		},
		responseTooLong: 'Risposta troppo lunga, vedi Console',
		upload: {
			title: 'Caricamento {0} @ {1}, {2}% completo',
			message: 'Per favore attendi mentre il file viene caricato...',
			success: 'Caricamento di {0} riuscito dopo {1}',
			successMulti: 'Caricati con successo {0} file',
			error: 'Errore nel caricamento di {0}'
		}
	},
	panel: {
		atx: {
			caption: 'Alimentatore ATX',
			on: 'Acceso',
			off: 'Spento'
		},
		babystepping: {
			caption: 'Z Babystepping',		// TODO: Need review
			current: 'Offset corrente: {0}'	// TODO: Need review
		},
		extrude: {
			caption: 'Controllo estrusione',
			mix: 'Mix',
			mixRatio: 'Ratio Mix:',
			amount: 'Feed amount in {0}:',	// TODO: Need review
			feedrate: 'Feedrate in {0}:',	// TODO: Need review
			retract: 'Ritrai',
			extrude: 'Estrudi'
		},
		extrusionFactors: {
			caption: 'Moltiplicatore estrusione',
			changeVisibility: 'Cambia visibilità',
			extruder: 'Estrusore {0}',
			noExtruders: 'Nessun estrusore'
		},
		fan: {
			caption: 'Controllo ventole',
			selection: 'Selezione ventole:',
			toolFan: 'Ventola attrezzo',
			fan: 'Ventola {0}'
		},
		fans: {
			caption: 'Ventole',
			changeVisibility: 'Cambia visibilità',
			toolFan: 'Ventola attrezzo',
			fan: 'Ventola {0}',
			noFans: 'Nessuna ventola'
		},
		heightmap: {
			scale: 'Scala:',
			orMore: 'or more',	// TODO: Need review
			orLess: 'or less',	// TODO: Need review
			axes: 'Assi:',		// TODO: Need review
			notAvailable: 'mappa altezza non disponibile',
			numPoints: 'Numero di punti: {0}',
			radius: 'Raggio di sondatura: {0}',	// TODO: Need review
			area: 'Area di sondatura: {0}',
			maxDeviations: 'Deviazione massima: {0} / {1}',
			meanError: 'Errore medio: {0}',
			rmsError: 'Errore RMS: {0}',
			topView: 'Vista superiore',
			colorScheme: 'Schema colori:',
			terrain: 'Superficie',
			heat: 'Calore',
			reload: 'Ricarica mappa altezze'
		},
		jobControl: {
			caption: 'Controllo lavoro',
			cancelJob: 'Annulla lavoro',
			cancelPrint: 'Annulla stampa',
			cancelSimulation: 'Annulla simulazione',
			pauseJob: 'Pause Job',
			pausePrint: 'Pause Print',
			pauseSimulation: 'Pause Simulation',
			resumeJob: 'Resume Job',
			resumePrint: 'Resume Print',
			resumeSimulation: 'Resume Simulation',
			repeatJob: 'Start Again',
			repeatPrint: 'Print Again',
			repeatSimulation: 'Simulate Again',
			autoSleep: 'Enable Auto-Sleep'
		},
		jobData: {
			caption: 'Dati raccolti',
			warmUpDuration: 'Tempo di riscaldamento',
			currentLayerTime: 'Tempo strato corrente',
			lastLayerTime: 'Tempo ultimo strato',
			jobDuration: 'Durata lavoro'
		},
		jobEstimations: {
			caption: 'Stime basate su',
			filament: 'Uso del filamento',
			file: 'Progresso del file',
			layer: 'Tempo dello strato',
			slicer: 'Slicer',
			simulation: 'Simulazione'
		},
		jobInfo: {
			caption: 'Informazioni lavoro',
			height: 'Altezza:',
			layerHeight: 'Altezza strato:',
			filament: 'Uso del filamento:',
			generatedBy: 'Generato da:'
		},
		movement: {
			caption: 'Movimentazione macchina',
			compensation: 'Compensazione e calibrazione',
			runBed: 'Livellamento piatto (G32)',
			runDelta: 'Calibrazione Delta (G32)',
			compensationInUse: 'Compensazione in uso: {0}',
			disableBedCompensation: 'Disabilita compensazione piano di stampa (M561)',
			disableMeshCompensation: 'Disabilita compensazione Mesh (G29 S2)',
			editMesh: 'Definisci un\'area per la compensazione Mesh (M557)',
			runMesh: 'Esegui compensazione Mesh (G29)',
			loadMesh: 'Carica mappa altezza salvata da scheda SD (G29 S1)',
			axesNotHomed: 'Il seguente asse non è azzerato:|I seguenti assi non sono azzerati:',
			noAxes: 'Nessun asse'
		},
		settingsAbout: {
			caption: 'Riguardo a',
			developedBy: 'Interfaccia Web sviluppata da',
			for: 'per',
			licensedUnder: 'Concesso in licenza secondo i termini di'
		},
		settingsAppearance: {
			caption: 'Aspetto',
			darkTheme: 'Tema scuro',
			language: 'Lingua',
			binaryFileSizes: 'Usa grandezza file binaria',
			binaryFileSizesTitle: 'Grandezza file mostrata in base 1024 (IEC) invece di 1000 (SI)',
			disableAutoComplete: 'Disabilita autocompletamento',
			disableAutoCompleteTitle: 'Non mostrare liste di autocompletando durante l\'inserimento di codice o temperatura'
		},
		settingsCommunication: {
			caption: 'Comunicazione',
			pingInterval: 'Intervallo PING quando in attesa (ms)',
			ajaxRetries: 'Massimo numero di tentativi AJAX',
			updateInterval: 'Intervallo aggiornamento ({0})',
			extendedUpdateEvery: 'Intervallo aggiornamento stato esteso',
			fileTransferRetryThreshold: 'Limite tentativi per trasferimento file ({0})',
			crcUploads: 'Usa checksum CRC32 per i caricamenti',
			unavailable: 'Nessuna impostazione disponibile'
		},
		settingsElectronics: {
			caption: 'Elettronica',
			diagnostics: 'Diagnostica',
			board: 'Scheda: {0}',
			firmware: 'Firmware: {0} ({1})',
			dwsFirmware: 'Versione Server Duet WiFi: {0}',
			updateNote: 'Nota: puoi installare aggiornamenti dalla pagina Sistema.'
		},
		settingsEndstops: {
			caption: 'Finecorsa',
			index: 'Indice',
			triggered: 'Attivato'
		},
		settingsGeneral: {
			caption: 'Generale',
			factoryReset: 'Ripristina a impostazioni di fabbrica',
			settingsStorageLocal: 'Salva in memoria locale',
			settingsSaveDelay: 'Ritardo aggiornamento per impostazioni cambiate ({0})',
			cacheStorageLocal: 'Salva cache in memoria locale',
			cacheSaveDelay: 'Ritardo aggiornamento per cambiamenti alla cache ({0})'
		},
		settingsListItems: {
			caption: 'Lista elementi',
			toolTemperatures: 'Temperatura attrezzi',
			bedTemperatures: 'Temperatura piano di stampa',
			chamberTemperatures: 'Temperatura camera',
			spindleRPM: 'RPM mandrino'
		},
		settingsMachine: {
			caption: 'Specifiche della macchina',
			revertDWC: 'Torna a DWC1',
			babystepAmount: 'Babystep amount ({0})',		// TODO: Need review
			moveFeedrate: 'Feedrate for move buttons ({0})'	// TODO: Need review
		},
		settingsNotifications: {
			caption: 'Notifiche',
			notificationErrorsPersistent: 'Non chiudere messaggi automaticamente',
			notificationTimeout: 'Tempo di chiusura notifiche di default ({0})'
		},
		settingsWebcam: {
			caption: 'Webcam',
			webcamURL: 'URL Webcam (opzionale)',
			webcamUpdateInterval: 'Intervallo aggiornamento Webcam ({0})',
			webcamLiveURL: 'URL da aprire quando l\'immagine webcam viene cliccata (opzionale)',
			webcamFix: 'Non aggiungere HTTP qualifier extra quando ricarichi l\'immagine', // TODO: Need review
			webcamEmbedded: 'Incorpora immagine webcam in un iframe',
			webcamRotation: 'Ruota immagine webcam',
			webcamFlip: 'Rovescia immagine webcam',
			flipNone: 'Nessuno',
			flipX: 'Rovescia X',
			flipY: 'Rovescia Y',
			flipBoth: 'Rovescia entrambi'
		},
		speedFactor: {
			caption: 'Moltiplicatore velocità'
		},
		status: {
			caption: 'Stato',
			mode: 'Modalità: {0}',
			toolPosition: 'Posizione attrezzo',
			machinePosition: 'Posizione macchina',
			extruders: 'Motori estrusore',
			extruderDrive: 'Motore {0}',
			speeds: 'Velocità',
			requestedSpeed: 'Velocità richiesta',
			topSpeed: 'Velocità massima',
			sensors: 'Sensori',
			mcuTemp: 'Temperatura MCU',
			minMax: 'Minima: {0}, Massima {1}',
			vIn: 'Vin',
			v12: 'V12',
			fanRPM: 'RPM ventola',
			probe: 'Sonda Z|Sonde Z',
			noStatus: 'Nessuno stato'
		},
		tools: {
			caption: 'Attrezzo',
			controlAll: 'Controlla tutto',
			turnEverythingOff: 'Spegni tutto',
			allActiveTemperatures: 'Imposta tutte le temperature attive',
			allStandbyTemperatures: 'Imposta tutte le temperature in attesa',
			tool: 'Attrezo {0}',
			loadFilament: 'Carica filamento',
			changeFilament: 'Cambia filamento',
			unloadFilament: 'Scarica filamento',
			heater: 'Riscaldatore {0}',
			current: 'Attuale',
			active: 'Attivo',
			standby: 'In attesa',
			bed: 'Piano riscaldato {0}',
			chamber: 'Camera {0}',
			extra: {
				caption: 'Extra',
				sensor: 'Sensore',
				sensorIndex: 'Sensore {0}',
				value: 'Valore',
				showInChart: 'Mostra nel grafico',
				noItems: 'Nessun sensore aggiuntivo'
			},
			noTools: 'Nessun attrezzo'
		},
		webcam: {
			caption: 'Sorveglianza Webcam',
			alt: '(immagine webcam)'
		}
	}
}
