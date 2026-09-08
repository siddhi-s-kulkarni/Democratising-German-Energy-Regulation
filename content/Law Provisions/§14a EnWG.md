This article governs the controllability of #DERs  in case grid operators recognize congestion issues in their grid. The DERs talked about here are also popularly referred to as #Steuerbareverbrauchseinrichtungen (SteuVE). 
These are:  
- private charging points, 
- heat pumps and other considerations of additional heating elements (heating rods)
- cooling devices
- battery storage systems.

Customers are compulsed to participate if:
- the maximum power drawn by a SteuVE > 4.2 kW
- it is connected to the low voltage grid
- the SteuVE was taken into operation after 01.01.2024

SteuVE which were installed before the 01.01.2024 and already had an active control agreement with grid operators must be transitioned to the new §14a model by 31.12.2028 at the latest.

In return:
-  The grid operator is not allowed to reject the grid connection for these devices to connect to the grid
- This regulation guarantees each SteuVE a minimum power (see Pmin for how this is calculated with 4.2 kW as baseline though it varies for larger heat pumps/cooling devices )
- The customer can benefit from reduced grid fees.

Ordinary household consumption is not included under §14a at all and is neither controlled nor dimmed.

The total minimum power Pmin signal sent by the grid operator is not always a flat 4.2 kW (this is the minimum power guaranteed to each SteuVE). For electric chargers and storage it is. For heat pumps and cooling devices, if their combined capacity exceeds 11 kW, the Pmin becomes 40% of that capacity instead (e.g. a 15 kW gets 0.4x15 kW= 6 kW minimum). When multiple SteuVE types share a connection, their combined minimum also factors in a simultaneity factor  since not all devices draw full power at once in practice.
# Modes of control
There are two ways in which this can be principally orchestrated. In the below example for the sake of simplicity two SteuVE are considered with the assumption that the heat pump is smaller than 11 kW.
- Direktsteuerung (direct control): where a SteuVE is directly controlled and dimmed. A minimum power of 4.2 kW can be guaranteed to each SteuVE. Here the signals are received via the #SMGW of the #iMSyS and communicated to the #Steuerbox which then sends dimming signals to the SteuVE.
	The PV generates 3 kW. The other load in the house received 2 kW and the charging point and the heat pump are dimmed by the grid operator to 4.2 kW.  Due to direct control, PV cannot contribute to supplying the charging point or the heat pump but only the other load in the household. They receive power from the grid and are dimmed by the grid controller. The power drawn from the grid (Pmin) is therefore 8.4 kW.
	![[Pasted image 20260905002016.png]]

- Zentralsteuerung (central control): The key element of central control is the EMS. Here, the control signals from the grid operator follow the same path of #SMGW  to the #Steuerbox. However, after the #Steuerbox, the EMS( #Homeenergymanagementsystems) is present in the control chain.  
	The grid operator's Pmin signal only constrains what the SteuVE end up drawing from the grid. How the EMS gets there including how it chooses to distribute PV between other load and SteuVE along the way is entirely the EMS' own decision and not something the regulator dictates. In principle, this could mean that the EMS could prioritize giving PV to the SteuVE instead of the other load, letting the SteuVE receive more total power without needing a larger grid allocation. Since other load's consumption is not monitored by §14a, it can simply draw whatever it needs from the grid instead without affecting the compliance for SteuVE at all.
	It can be seen that with an EMS even generating assets can be integrated in the logic and therefore the SteuVE is able to get more power. The EMS sees the whole picture at once and decides how to allocate all available power such as grid allowance, PV and other load together. 
	The total power pool for supplying the SteuVE (charging point, heat pump and other load) here is 8.4 kW(grid) + 3 kW (PV) = 11.4 kW
	The Pmin here is also 8.4 kW though actual consumption can exceed this once PV is factored in as shown below.
	The charging point and heat pump receive 4.7 kW each instead of 4.2 kW as compared to the direct control case. This is because the EMS is able to fold everything (grid cap, PV and load) into one combined calculation instead of treating each in isolation. 
	Note: the exact 4.7 kW/ 4.7 kW split shown here is illustrative. The EMS could easily prioritize one over the other based on the household customer's preferences which would allow one SteuVE to consume more than the other.
	![[Pasted image 20260905002105.png]]

# Remuneration for customers:
The remuneration for customers is regulated via 3 modules. Certain modules have extra technical requirements associated with them.

Module 1: The customer can receive a fixed discount on grid fees. This is calculated in the electricity bill of the customer. The fixed discount can vary based on the grid region in which the customer is located. There are no extra technical requirements.

Module 2: The customer receives a 60% discount on the original #Arbeitspreis for every consumed kWh and will be considered in the electricity bill automatically. A separate meter is necessary as a technical requirement for each SteuVE.

Module 3:  This entails varying grid fees in order to motivate the customer to shift consumption to times of the day in order to relieve the grid. The grid operator has to define varying grid fees with a high tariff, standard tariff and low tariff. Module 3 can only be used in combination with Module 1. Also Module 3 requires that the SteuVE is connected to the grid using a separate #iMSyS .



Linked notes:
- [[MsbG]]