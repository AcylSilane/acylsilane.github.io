#!/usr/bin/env python

import ase.cluster

particle = ase.cluster.Icosahedron("Cu", 3) # 55 atoms
particle.write("logo_np.xyz")