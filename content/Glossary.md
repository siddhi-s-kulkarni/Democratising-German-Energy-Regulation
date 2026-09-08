## Customer segments and connection types

[[Home Segment]] : Private homes and apartment buildings connected to the low-voltage grid. Residential consumers are considered with a #standardloadprofile and are increasingly acting as prosumers through PV generation, battery storage, EV charging and heat pumps.

[[C&I Segment]]: Commercial and industrial customers with a higher load profile than home customers, ranging from small commerce to intensive industrial consumers. Customers with a yearly consumption > 100 MWh are subject to RLM and can be billed via a split #Arbeitspreis and #Leistungspreis model.

[[Utility Scale Segment]] : This refers to large plants which are larger than the [[C&I Segment]] and has no official kW threshold associated with it. The benchmark shifts with time with economies of scale. It commonly refers to front of the meter (wind, battery storage, PV or co-located plants) plants that are installed in public spaces.

#Behindthemeter: This refers to plants which are coupled with the load. They exist behind the metering identity of the customer and are usually built in order to support and complement the load of the customer.

#Frontofthemeter: This  refers to plants which are not coupled with the load of a customer. They exist as their own identity and are not explicitly built for the purpose of supporting a customer load.

## Legal foundation

[[EEG]]: Erneuerbare-Energien-Gesetz (2000)

[[EnWG]]: Energiewirtschaftsgesetz (2005)

## Metering and control hardware

#mME : moderne Messeinrichtung. These are digital meters that replace mechanical Ferraris meters. They record energy consumption digitally and store historical usage data. The consumption data can also be viewed on the digital display in real time. It stores data locally and does not send it automatically to the grid operator or supplier.

#SMGW: Smart Meter Gateway. These are communication modules which can be attached to an mME. The data measured by mME can be automatically sent to the grid operator using this communication/security hub, supplier or authorized third parties. The SMGW has a CLS channel that is bidirectional. It can carry a control signal from a DSO to a device and can carry status signal back. DSOs can receive feedback on whether a steering signal that was sent was acted upon. It is certified under strict security standards.

#iMSyS : intelligentes Messsystem or smart meter in English. This is the combination of a #mME  and a #SMGW. They are said to be intelligent because they send consumption data automatically to the grid supplier and that is enabled by the #SMGW . Furthermore, they enable billing according to dynamic tariffs because they are able to measure consumption according to a specific time interval.

#Steuerbox:  This is also called CLS (controllable local system). The CLS/Steuerbox module is a separate pluggable piece of hardware sitting inside or alongside the SMGW and physically slotted into the gateway. It provides the ability to connect controllable devices (electric vehicles, heat pumps, batteries) and to transmit third party communication over the CLS channel which the SMGW secures and tunnels.
The SMGW's job is to provide the secure, certified transport layer (TLS tunnel, authentication) that the CLS module uses to carry control signals out to the device and status/acknowledgment data back to the DSO or control party.

The full chain is: #mME Messeinrichtung (measures) → #SMGW (secures + routes + is the thing with the WAN connection to the supplier/DSO) → #Steuerbox CLS module (plugged into SMGW, carries the bidirectional control traffic to steerable devices).

<a id="steuerbareverbrauchseinrichtungen"></a>
#DERs: Distributed Energy Resources. These are small-to medium-scale energy generation, storage or controllable load devices that are connected to the local distribution grid or household. Examples are battery storage, photovoltaic (PV) systems, heat pumps, electric vehicle (EV) charging stations and mini CHPs (combined heat and power units). In the [[§14a EnWG]] regulation, these are also referred to as #Steuerbareverbrauchseinrichtungen . However it should be noted that only certain #DERs fall in the category of #Steuerbareverbrauchseinrichtungen . This is specified in the note for [[§14a EnWG]].

#Homeenergymanagementsystems: These orchestrate smart control of assets and devices in the home.

## How customers get billed

#Electricity_bill: The total electricity bill, expressed as a ct/kWh price, consists of the energy procurement costs (this is what the supplier pays to buy the power), grid fees and taxes and levies. The grid fee component itself is structured differently depending on customer size. Smaller customers with #standardloadprofile are billed for the grid fees via a Grundpreis and Arbeitspreis structure. Larger customers (yearly consumption > 100000 kWh and therefore subject to #RLM ) are billed for grid fees via a separate #Arbeitspreis and #Leistungspreis structure.

#standardloadprofile : This is a standardized and typified representation of the expected electricity consumption over a certain period of time for certain consumer groups. It is determined by grid operators based on actual customer consumption of those consumer groups.

#RLM : RLM stands for "Registrierende Leistungsmessung or Registrierende Lastgangmessung" and is the continuous measurement of the electricity or gas consumption. The energy consumption is measured at regular intervals (15 minutes for electricity and 60 minutes for gas) and recorded. The recorded data is sent directly to the grid operator. This is only done for customers with an electricity consumption > 100000 kWh or a gas consumption > 1.5 GWh. It informs the grid fee component as well as the energy procurement/commodity portion of the electricity bill.

#Arbeitspreis : This relates to the grid fee component of the electricity bill. This can be translated to the price for the work done i.e. the kWh/MWh consumed. The concept of grid fees using a separate Arbeitspreis and #Leistungspreis is usually only for customers whose yearly electricity consumption > 100000 kWh/year and therefore have an RLM measurement. 

#Leistungspreis: This relates to the grid fee component of the electricity bill. This is the price according to the maximum kW consumed. The concept of grid fees using a separate #Arbeitspreis and Leistungspreis is usually only for customers whose yearly  electricity consumption > 100000 kWh/year and therefore have a RLM measurement. 

## EEG feed-in mechanisms

#Einspeisevergütung: This means receiving a fixed, unchanged price for every kWh sold to the grid, for a period of 20 years after taking the plant in operation. This is essentially a fixed feed-in tariff. Also the operator of the plant does not have to sell the electricity on his own but just feed the electricity directly into the grid. This was first introduced in 2000.

#Direktvermarktung:This can be translated to direct marketing in English (in the sense of directly selling electricity on the power market, not advertising). Generating plants that do not participate in the fixed feed-in tariff scheme are part of the direct marketing. The Direktvermarktung was introduced in the year 2012 as an option for all major renewable energy plants to integrate them into the power market. At the time of introduction, it provided the option to sell a part or all of the electricity generated by plants using Direktvermarktung. In 2016/2017 it became compulsory for all plants >= 100 kW to participate in this scheme. The requirement is tied to the plant's installed capacity.

#Anzulegenderwert: There are three terminologies to be understood in this context: Anzulegender Wert, Marktwert, Marktprämie. If the Marktwert is below the Anzulegender Wert, the grid operator pays this difference to the plant operator as the Marktprämie. If the Marktwert is above the Anzulegender Wert, the Marktprämie falls to 0 but the operator keeps all the sales. The system is therefore asymmetrical. It guarantees a minimum but does not fix a ceiling (maximum) hence the profit can be very high. This model is essentially composed of the moving Marktwert and a flexible Marktprämie and both these components add up to reach the goal of the Anzulegender Wert.

#Marktprämie: This is the variable top-up payment made by the grid operator to the plant operator and is calculated as the gap between the Marktwert and the #Anzulegenderwert . It is distinct from the Marktwert payment which is paid by the Direktvermarkter to the plant operator.

#Solarspitzengesetz:The Solarspitzengesetz which was finalised on the 25 February 2025 reformed the system of Einspeisevergütung (fix feed-in tariff). The changes essentially mean that Einspeisevergütung for generation will be reduced to 0€ for negative day-ahead price hours. This is the case for all new PV plants >2 kWp installed after the 25 February 2025. However this doesn't mean that those negative price hours in that 20 year period are lost forever. These hours are added at the end of the 20 year period. This also applies to the Marktprämie, which will be 0€ during negative price hours. The goal of the EEG through the Solarspitzengesetz is to achieve a more market oriented behaviour for PV generation of all sizes.

#MiSpeL:Marktintegration von Speichern und Ladepunkten. MiSpeL strives to include battery storage systems (more specifically behind the meter battery storage) and charging points in market participation. It replaces the Ausschließlichkeitsprinzip (exclusivity option) which allowed batteries to only charge from the renewable energy source if a fixed feed-in tariff was to be expected by the customer. With MiSpeL, batteries can finally be operated fully bidirectionally. They can charge from the renewable energy source that they are paired with as well as from the grid. Similarly they can also discharge into the grid.

## How a law actually gets made

#BNetzA : It can be defined as "The Federal Network Agency" and it is a major regulator responsible for the German electricity, gas, telecommunication, post and railways sectors.

#Bundeskabinett: This is the Federal cabinet and is the German government's federal collective body. It consists of the Chancellor and federal ministers. When a bill is "beschlossen" or finalised here, it means that the government has formally agreed on a draft and is putting it forward. However, it is not yet a law. Approval is needed from the #Bundesrat and #Bundestag.

#Bundestag: This is Germany's directly elected national parliament. After the #Bundeskabinett has approved a draft, the Bundestag debates, amends and votes on it. A law needs approval from this government body for it to take effect.

#Bundesrat: This government body represents Germany's 16 state governments at the federal level made up of delegated members of each state government. Depending on the subject matter of the law, its approval is either explicitly required or it has the opportunity to object. For energy sector regulation its involvement is essential and crucial.
