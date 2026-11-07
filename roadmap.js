const ROADMAP = [
  {
    "id": "v2m01",
    "title": "Learn OpenUSD: Learning About Stages, Prims and Attributes",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 1,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/index.html",
    "topics": [
      "Create and reopen a stage",
      "Define typed prims",
      "Author typed attributes",
      "Inspect prim and property paths"
    ],
    "submodules": [
      {
        "title": "Create and reopen a stage",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/stage.html"
      },
      {
        "title": "Define typed prims",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/prims.html"
      },
      {
        "title": "Author typed attributes",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/properties/attributes.html"
      },
      {
        "title": "Inspect prim and property paths",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/prim-property-paths.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What does a USD stage represent?",
      "options": [
        "Only one mesh",
        "The composed scene view",
        "Only an image texture"
      ],
      "answer": 1,
      "explanation": "The composed scene view. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m02",
    "title": "Learn OpenUSD: Traversing Stages",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 1,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/stage-traversal.html",
    "topics": [
      "Traverse the scene tree",
      "Filter prims by schema",
      "Handle inactive prims",
      "Build a stage inspection script"
    ],
    "submodules": [
      {
        "title": "Traverse the scene tree",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/stage-traversal.html"
      },
      {
        "title": "Filter prims by schema",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/scene-description-blueprints/schemas.html"
      },
      {
        "title": "Handle inactive prims",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/active-inactive-prims.html"
      },
      {
        "title": "Build a stage inspection script",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/stage-traversal.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What is stage traversal used for?",
      "options": [
        "Rendering final pixels",
        "Visiting prims in the scene hierarchy",
        "Compiling Python"
      ],
      "answer": 1,
      "explanation": "Visiting prims in the scene hierarchy. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m03",
    "title": "Learn OpenUSD: Using Attributes",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 2,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/properties/attributes.html",
    "topics": [
      "Read attribute values",
      "Set typed values",
      "Distinguish attributes and relationships",
      "Inspect resolved values"
    ],
    "submodules": [
      {
        "title": "Read attribute values",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/properties/attributes.html"
      },
      {
        "title": "Set typed values",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/properties/attributes.html"
      },
      {
        "title": "Distinguish attributes and relationships",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/properties/relationships.html"
      },
      {
        "title": "Inspect resolved values",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/value-resolution.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What does an attribute hold?",
      "options": [
        "An entire file system",
        "A typed value on a prim",
        "Only a material preview"
      ],
      "answer": 1,
      "explanation": "A typed value on a prim. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m04",
    "title": "Learn OpenUSD: Understanding Model Kinds",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 3,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/model-kinds.html",
    "topics": [
      "Recognize model kinds",
      "Organize component boundaries",
      "Compose assemblies",
      "Validate model hierarchy"
    ],
    "submodules": [
      {
        "title": "Recognize model kinds",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/model-kinds.html"
      },
      {
        "title": "Organize component boundaries",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/model-hierarchy/exercise-components.html"
      },
      {
        "title": "Compose assemblies",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/model-hierarchy/what-are-model-kinds.html"
      },
      {
        "title": "Validate model hierarchy",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/beyond-basics/model-kinds.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Why assign model kinds?",
      "options": [
        "To change render resolution",
        "To describe a meaningful asset hierarchy",
        "To compress textures"
      ],
      "answer": 1,
      "explanation": "To describe a meaningful asset hierarchy. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m05",
    "title": "Learn OpenUSD: Setting Up Basic Animations",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 4,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/timecodes-timesamples.html",
    "topics": [
      "Set timeline bounds",
      "Author time samples",
      "Animate transforms",
      "Compare sampled values"
    ],
    "submodules": [
      {
        "title": "Set timeline bounds",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/timecodes-timesamples.html"
      },
      {
        "title": "Author time samples",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/timecodes-timesamples.html"
      },
      {
        "title": "Animate transforms",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/scene-description-blueprints/xform.html"
      },
      {
        "title": "Compare sampled values",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/stage-setting/timecodes-timesamples.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "How is a changing USD value authored?",
      "options": [
        "By renaming the stage each frame",
        "With values at time samples",
        "By deleting all layers"
      ],
      "answer": 1,
      "explanation": "With values at time samples. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m06",
    "title": "Learn OpenUSD: An Introduction to Strength Ordering",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 5,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/composition-basics/strength-ordering.html",
    "topics": [
      "Identify layer opinions",
      "Understand composition arcs",
      "Trace strength resolution",
      "Debug competing opinions"
    ],
    "submodules": [
      {
        "title": "Identify layer opinions",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/composition-basics/layers.html"
      },
      {
        "title": "Understand composition arcs",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/composition-basics/strength-ordering.html"
      },
      {
        "title": "Trace strength resolution",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/strength-ordering/what-is-liverps.html"
      },
      {
        "title": "Debug competing opinions",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/strength-ordering/tracing-through-liverps.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What determines the winning composed opinion?",
      "options": [
        "File creation time alone",
        "Composition strength rules",
        "The longest prim name"
      ],
      "answer": 1,
      "explanation": "Composition strength rules. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m07",
    "title": "Learn OpenUSD: Creating Composition Arcs",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 6,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/index.html",
    "topics": [
      "Compose sublayers",
      "Reference reusable assets",
      "Load payloads selectively",
      "Build variant sets"
    ],
    "submodules": [
      {
        "title": "Compose sublayers",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/sublayers/working-with-sublayers.html"
      },
      {
        "title": "Reference reusable assets",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/references-payloads/working-with-references.html"
      },
      {
        "title": "Load payloads selectively",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/references-payloads/working-with-payloads.html"
      },
      {
        "title": "Build variant sets",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/variant-sets/working-with-variant-sets.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "How does a payload differ from a reference?",
      "options": [
        "Payloads cannot contain geometry",
        "Payload content can be loaded selectively",
        "References are always animated"
      ],
      "answer": 1,
      "explanation": "Payload content can be loaded selectively. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m08",
    "title": "Learn OpenUSD: Asset Structure Principles and Content Aggregation",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 7,
    "hours": 13,
    "project": false,
    "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/index.html",
    "topics": [
      "Define asset interfaces",
      "Separate workstreams",
      "Parameterize assets",
      "Apply reference and payload patterns"
    ],
    "submodules": [
      {
        "title": "Define asset interfaces",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/asset-structure-principles/asset-interface-pt1.html"
      },
      {
        "title": "Separate workstreams",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/workstreams/modeling-workstreams.html"
      },
      {
        "title": "Parameterize assets",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/asset-parameterization/what-is-asset-parameterization.html"
      },
      {
        "title": "Apply reference and payload patterns",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/asset-structure/reference-payload-pattern/what-is-ref-payload-pattern.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Why separate asset workstreams into layers?",
      "options": [
        "To eliminate all metadata",
        "To manage independent contributions and composition",
        "To force every edit into one file"
      ],
      "answer": 1,
      "explanation": "To manage independent contributions and composition. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m09",
    "title": "Learn OpenUSD: Developing Data Exchange Pipelines",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 7,
    "hours": 13,
    "project": true,
    "url": "https://docs.nvidia.com/learn-openusd/latest/data-exchange/index.html",
    "topics": [
      "Select USD interchange formats",
      "Normalize units and scale",
      "Preserve asset metadata",
      "Validate converted scene structure"
    ],
    "submodules": [
      {
        "title": "Select USD interchange formats",
        "weight": 20,
        "url": "https://docs.nvidia.com/learn-openusd/latest/data-exchange/data-exchange/what-is-data-exchange.html"
      },
      {
        "title": "Normalize units and scale",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/data-exchange/data-transformation/what-is-data-transformation.html"
      },
      {
        "title": "Preserve asset metadata",
        "weight": 25,
        "url": "https://docs.nvidia.com/learn-openusd/latest/data-exchange/data-extraction/exercise-extracting-materials.html"
      },
      {
        "title": "Validate converted scene structure",
        "weight": 30,
        "url": "https://docs.nvidia.com/learn-openusd/latest/data-exchange/asset-validation/exercise-asset-validation-testing.html"
      }
    ],
    "sourceNote": "Official NVIDIA data exchange learning path.",
    "quiz": {
      "question": "What should a CAD-to-USD validation check include?",
      "options": [
        "Only file extension",
        "Units and scene structure",
        "Only the screenshot color"
      ],
      "answer": 1,
      "explanation": "Units and scene structure. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m10",
    "title": "NVIDIA-Certified Professional OpenUSD Development",
    "provider": "NVIDIA",
    "track": "OpenUSD & NVIDIA Omniverse",
    "trackIndex": 0,
    "week": 8,
    "hours": 13,
    "project": false,
    "url": "https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/",
    "topics": [
      "Review exam objectives",
      "Assess composition knowledge",
      "Practice pipeline scenarios",
      "Check registration and exam requirements"
    ],
    "submodules": [
      {
        "title": "Review exam objectives",
        "weight": 20,
        "url": "https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/"
      },
      {
        "title": "Assess composition knowledge",
        "weight": 25,
        "url": "https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/"
      },
      {
        "title": "Practice pipeline scenarios",
        "weight": 25,
        "url": "https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/"
      },
      {
        "title": "Check registration and exam requirements",
        "weight": 30,
        "url": "https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What awards an NVIDIA professional certification?",
      "options": [
        "Checking every box in this tracker",
        "Meeting the official exam requirements",
        "Watching one introductory video"
      ],
      "answer": 1,
      "explanation": "Meeting the official exam requirements. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m11",
    "title": "Getting Started with Modern Robotics and AI",
    "provider": "Robocademy",
    "track": "Robotics, Isaac Sim & Physical AI",
    "trackIndex": 1,
    "week": 9,
    "hours": 13,
    "project": false,
    "url": "https://robocademy.com/courses/getting-started-with-modern-robotics-and-ai-68fd2b610328536ff4cc55fd",
    "topics": [
      "Map robot hardware and software",
      "Understand sensing and actuation",
      "Explore ROS 2 concepts",
      "Plan a simulated robot exercise"
    ],
    "submodules": [
      {
        "title": "Map robot hardware and software",
        "weight": 20,
        "url": "https://robocademy.com/courses/getting-started-with-modern-robotics-and-ai-68fd2b610328536ff4cc55fd"
      },
      {
        "title": "Understand sensing and actuation",
        "weight": 25,
        "url": "https://robocademy.com/courses/getting-started-with-modern-robotics-and-ai-68fd2b610328536ff4cc55fd"
      },
      {
        "title": "Explore ROS 2 concepts",
        "weight": 25,
        "url": "https://robocademy.com/courses/getting-started-with-modern-robotics-and-ai-68fd2b610328536ff4cc55fd"
      },
      {
        "title": "Plan a simulated robot exercise",
        "weight": 30,
        "url": "https://robocademy.com/courses/getting-started-with-modern-robotics-and-ai-68fd2b610328536ff4cc55fd"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Which loop describes robot operation?",
      "options": [
        "Render, archive, and email",
        "Sense, decide, and act",
        "Compress, rename, and print"
      ],
      "answer": 1,
      "explanation": "Sense, decide, and act. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m12",
    "title": "NVIDIA Isaac Sim on AWS",
    "provider": "AWS",
    "track": "Robotics, Isaac Sim & Physical AI",
    "trackIndex": 1,
    "week": 10,
    "hours": 13,
    "project": false,
    "url": "https://docs.isaacsim.omniverse.nvidia.com/latest/installation/install_advanced_cloud_setup_aws.html",
    "topics": [
      "Review cloud GPU requirements",
      "Configure the simulation host",
      "Connect to the simulator",
      "Validate and shut down resources"
    ],
    "submodules": [
      {
        "title": "Review cloud GPU requirements",
        "weight": 20,
        "url": "https://docs.isaacsim.omniverse.nvidia.com/latest/installation/install_advanced_cloud_setup_aws.html"
      },
      {
        "title": "Configure the simulation host",
        "weight": 25,
        "url": "https://docs.isaacsim.omniverse.nvidia.com/latest/installation/install_advanced_cloud_setup_aws.html"
      },
      {
        "title": "Connect to the simulator",
        "weight": 25,
        "url": "https://docs.isaacsim.omniverse.nvidia.com/latest/installation/install_advanced_cloud_setup_aws.html"
      },
      {
        "title": "Validate and shut down resources",
        "weight": 30,
        "url": "https://docs.isaacsim.omniverse.nvidia.com/latest/installation/install_advanced_cloud_setup_aws.html"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What should happen after a cloud simulation exercise?",
      "options": [
        "Leave all GPU instances running",
        "Stop unneeded resources and check usage",
        "Publish account credentials"
      ],
      "answer": 1,
      "explanation": "Stop unneeded resources and check usage. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m13",
    "title": "Real-World Breakthroughs in Physical AI",
    "provider": "AWS",
    "track": "Robotics, Isaac Sim & Physical AI",
    "trackIndex": 1,
    "week": 11,
    "hours": 13,
    "project": false,
    "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21",
    "topics": [
      "Identify a physical AI use case",
      "Map perception to action",
      "Evaluate deployment constraints",
      "Define success and safety metrics"
    ],
    "submodules": [
      {
        "title": "Identify a physical AI use case",
        "weight": 20,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      },
      {
        "title": "Map perception to action",
        "weight": 25,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      },
      {
        "title": "Evaluate deployment constraints",
        "weight": 25,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      },
      {
        "title": "Define success and safety metrics",
        "weight": 30,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      }
    ],
    "sourceNote": "Official supporting resource; exact session enrollment link not confirmed.",
    "quiz": {
      "question": "How should a physical AI application be assessed?",
      "options": [
        "Only by model size",
        "Against task performance and safety constraints",
        "Only by presentation quality"
      ],
      "answer": 1,
      "explanation": "Against task performance and safety constraints. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m14",
    "title": "Diving Deep on Physical AI",
    "provider": "AWS",
    "track": "Robotics, Isaac Sim & Physical AI",
    "trackIndex": 1,
    "week": 12,
    "hours": 13,
    "project": false,
    "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21",
    "topics": [
      "Connect simulation and training",
      "Design data flow",
      "Compare cloud and edge roles",
      "Review a production architecture"
    ],
    "submodules": [
      {
        "title": "Connect simulation and training",
        "weight": 20,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      },
      {
        "title": "Design data flow",
        "weight": 25,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      },
      {
        "title": "Compare cloud and edge roles",
        "weight": 25,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      },
      {
        "title": "Review a production architecture",
        "weight": 30,
        "url": "https://skillbuilder.aws/learning-plan/7SYE2PF4JQ/diving-deep-on-physical-ai/4MWBGV6R21"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Why distinguish cloud and edge execution?",
      "options": [
        "Edge devices never need testing",
        "Latency and resource constraints differ",
        "Cloud systems cannot store data"
      ],
      "answer": 1,
      "explanation": "Latency and resource constraints differ. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m15",
    "title": "Automate with NVIDIA NeMo Agent Toolkit and Bedrock AgentCore",
    "provider": "AWS",
    "track": "Robotics, Isaac Sim & Physical AI",
    "trackIndex": 1,
    "week": 13,
    "hours": 13,
    "project": true,
    "url": "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html",
    "topics": [
      "Define agent tools",
      "Understand runtime isolation",
      "Connect agent execution",
      "Evaluate observability and permissions"
    ],
    "submodules": [
      {
        "title": "Define agent tools",
        "weight": 20,
        "url": "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html"
      },
      {
        "title": "Understand runtime isolation",
        "weight": 25,
        "url": "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html"
      },
      {
        "title": "Connect agent execution",
        "weight": 25,
        "url": "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html"
      },
      {
        "title": "Evaluate observability and permissions",
        "weight": 30,
        "url": "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html"
      }
    ],
    "sourceNote": "Official supporting resource; exact session enrollment link not confirmed.",
    "quiz": {
      "question": "Why limit an agent tool's permissions?",
      "options": [
        "To increase arbitrary access",
        "To restrict actions to its required scope",
        "To avoid evaluating tool calls"
      ],
      "answer": 1,
      "explanation": "To restrict actions to its required scope. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m16",
    "title": "Scaling Synthetic Data with NVIDIA Cosmos on AWS",
    "provider": "AWS",
    "track": "Synthetic Data Generation & NVIDIA Cosmos",
    "trackIndex": 2,
    "week": 14,
    "hours": 13,
    "project": false,
    "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws",
    "topics": [
      "Define synthetic data requirements",
      "Generate varied scenarios",
      "Filter low-quality examples",
      "Evaluate downstream model utility"
    ],
    "submodules": [
      {
        "title": "Define synthetic data requirements",
        "weight": 20,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      },
      {
        "title": "Generate varied scenarios",
        "weight": 25,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      },
      {
        "title": "Filter low-quality examples",
        "weight": 25,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      },
      {
        "title": "Evaluate downstream model utility",
        "weight": 30,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      }
    ],
    "sourceNote": "Official supporting resource; exact session enrollment link not confirmed.",
    "quiz": {
      "question": "How should synthetic data quality be assessed?",
      "options": [
        "Only by number of generated files",
        "By coverage and downstream task performance",
        "Only by visual novelty"
      ],
      "answer": 1,
      "explanation": "By coverage and downstream task performance. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m17",
    "title": "Fine-tuning NVIDIA GR00T on AWS",
    "provider": "AWS",
    "track": "Synthetic Data Generation & NVIDIA Cosmos",
    "trackIndex": 2,
    "week": 14,
    "hours": 13,
    "project": true,
    "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws",
    "topics": [
      "Understand vision language action models",
      "Prepare demonstration data",
      "Configure fine-tuning",
      "Evaluate held-out robot tasks"
    ],
    "submodules": [
      {
        "title": "Understand vision language action models",
        "weight": 20,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      },
      {
        "title": "Prepare demonstration data",
        "weight": 25,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      },
      {
        "title": "Configure fine-tuning",
        "weight": 25,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      },
      {
        "title": "Evaluate held-out robot tasks",
        "weight": 30,
        "url": "https://github.com/aws-samples/sample-the-physical-ai-toolchain-on-aws"
      }
    ],
    "sourceNote": "Official supporting resource; exact session enrollment link not confirmed.",
    "quiz": {
      "question": "What is a held-out evaluation set for?",
      "options": [
        "Duplicating all training examples",
        "Testing generalization beyond training examples",
        "Replacing all demonstrations"
      ],
      "answer": 1,
      "explanation": "Testing generalization beyond training examples. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m18",
    "title": "Generative AI: Introduction and Applications",
    "provider": "IBM",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 15,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/generative-ai-introduction-and-applications",
    "topics": [
      "Compare generative and predictive AI",
      "Explore text and image use cases",
      "Identify model limitations",
      "Evaluate responsible applications"
    ],
    "submodules": [
      {
        "title": "Compare generative and predictive AI",
        "weight": 20,
        "url": "https://www.coursera.org/learn/generative-ai-introduction-and-applications"
      },
      {
        "title": "Explore text and image use cases",
        "weight": 25,
        "url": "https://www.coursera.org/learn/generative-ai-introduction-and-applications"
      },
      {
        "title": "Identify model limitations",
        "weight": 25,
        "url": "https://www.coursera.org/learn/generative-ai-introduction-and-applications"
      },
      {
        "title": "Evaluate responsible applications",
        "weight": 30,
        "url": "https://www.coursera.org/learn/generative-ai-introduction-and-applications"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "How does generative AI differ from a basic classifier?",
      "options": [
        "It guarantees factual answers",
        "It can produce new content",
        "It never uses training data"
      ],
      "answer": 1,
      "explanation": "It can produce new content. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m19",
    "title": "Generative AI: Prompt Engineering Basics",
    "provider": "IBM",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 16,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/generative-ai-prompt-engineering-for-everyone",
    "topics": [
      "Specify task and context",
      "Use examples and constraints",
      "Iterate on prompt quality",
      "Evaluate outputs against a rubric"
    ],
    "submodules": [
      {
        "title": "Specify task and context",
        "weight": 20,
        "url": "https://www.coursera.org/learn/generative-ai-prompt-engineering-for-everyone"
      },
      {
        "title": "Use examples and constraints",
        "weight": 25,
        "url": "https://www.coursera.org/learn/generative-ai-prompt-engineering-for-everyone"
      },
      {
        "title": "Iterate on prompt quality",
        "weight": 25,
        "url": "https://www.coursera.org/learn/generative-ai-prompt-engineering-for-everyone"
      },
      {
        "title": "Evaluate outputs against a rubric",
        "weight": 30,
        "url": "https://www.coursera.org/learn/generative-ai-prompt-engineering-for-everyone"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Why include examples in a prompt?",
      "options": [
        "To guarantee correctness",
        "To clarify the expected task and output",
        "To remove the need for review"
      ],
      "answer": 1,
      "explanation": "To clarify the expected task and output. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m20",
    "title": "Generative AI: Revolutionizing the Product Owner Role",
    "provider": "IBM",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 17,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/gen-ai-revolutionizing-the-product-owner-role",
    "topics": [
      "Analyze customer feedback",
      "Draft and refine user stories",
      "Prioritize a product backlog",
      "Review stakeholder and ethical implications"
    ],
    "submodules": [
      {
        "title": "Analyze customer feedback",
        "weight": 20,
        "url": "https://www.coursera.org/learn/gen-ai-revolutionizing-the-product-owner-role"
      },
      {
        "title": "Draft and refine user stories",
        "weight": 25,
        "url": "https://www.coursera.org/learn/gen-ai-revolutionizing-the-product-owner-role"
      },
      {
        "title": "Prioritize a product backlog",
        "weight": 25,
        "url": "https://www.coursera.org/learn/gen-ai-revolutionizing-the-product-owner-role"
      },
      {
        "title": "Review stakeholder and ethical implications",
        "weight": 30,
        "url": "https://www.coursera.org/learn/gen-ai-revolutionizing-the-product-owner-role"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Who remains accountable for product backlog decisions?",
      "options": [
        "The model alone",
        "The responsible product team",
        "The prompt template"
      ],
      "answer": 1,
      "explanation": "The responsible product team. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m21",
    "title": "Start Writing Prompts like a Pro",
    "provider": "Google",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 18,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/google-start-writing-prompts-like-a-pro",
    "topics": [
      "Define the task",
      "Provide context and references",
      "Evaluate response quality",
      "Iterate and retain effective prompts"
    ],
    "submodules": [
      {
        "title": "Define the task",
        "weight": 20,
        "url": "https://www.coursera.org/learn/google-start-writing-prompts-like-a-pro"
      },
      {
        "title": "Provide context and references",
        "weight": 25,
        "url": "https://www.coursera.org/learn/google-start-writing-prompts-like-a-pro"
      },
      {
        "title": "Evaluate response quality",
        "weight": 25,
        "url": "https://www.coursera.org/learn/google-start-writing-prompts-like-a-pro"
      },
      {
        "title": "Iterate and retain effective prompts",
        "weight": 30,
        "url": "https://www.coursera.org/learn/google-start-writing-prompts-like-a-pro"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What should follow an initial model response?",
      "options": [
        "Assume it is correct",
        "Evaluate it against the task and iterate",
        "Erase the original requirements"
      ],
      "answer": 1,
      "explanation": "Evaluate it against the task and iterate. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m22",
    "title": "Design Prompts for Everyday Work Tasks",
    "provider": "Google",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 19,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/google-design-prompts-for-everyday-work-tasks",
    "topics": [
      "Draft audience-specific communications",
      "Summarize work documents",
      "Structure useful tables",
      "Check facts and confidential inputs"
    ],
    "submodules": [
      {
        "title": "Draft audience-specific communications",
        "weight": 20,
        "url": "https://www.coursera.org/learn/google-design-prompts-for-everyday-work-tasks"
      },
      {
        "title": "Summarize work documents",
        "weight": 25,
        "url": "https://www.coursera.org/learn/google-design-prompts-for-everyday-work-tasks"
      },
      {
        "title": "Structure useful tables",
        "weight": 25,
        "url": "https://www.coursera.org/learn/google-design-prompts-for-everyday-work-tasks"
      },
      {
        "title": "Check facts and confidential inputs",
        "weight": 30,
        "url": "https://www.coursera.org/learn/google-design-prompts-for-everyday-work-tasks"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What should be checked before submitting work documents to AI?",
      "options": [
        "Only document length",
        "Data sensitivity and permitted use",
        "Only the filename"
      ],
      "answer": 1,
      "explanation": "Data sensitivity and permitted use. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m23",
    "title": "AI Fluency Framework & Foundations",
    "provider": "Anthropic",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 20,
    "hours": 13,
    "project": false,
    "url": "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    "topics": [
      "Practice delegation",
      "Improve description",
      "Apply discernment",
      "Exercise diligence"
    ],
    "submodules": [
      {
        "title": "Practice delegation",
        "weight": 20,
        "url": "https://anthropic.skilljar.com/ai-fluency-framework-foundations"
      },
      {
        "title": "Improve description",
        "weight": 25,
        "url": "https://anthropic.skilljar.com/ai-fluency-framework-foundations"
      },
      {
        "title": "Apply discernment",
        "weight": 25,
        "url": "https://anthropic.skilljar.com/ai-fluency-framework-foundations"
      },
      {
        "title": "Exercise diligence",
        "weight": 30,
        "url": "https://anthropic.skilljar.com/ai-fluency-framework-foundations"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Which fluency skill concerns evaluating AI outputs?",
      "options": [
        "Blind acceptance",
        "Discernment",
        "Delegating all responsibility"
      ],
      "answer": 1,
      "explanation": "Discernment. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m24",
    "title": "Claude 101",
    "provider": "Anthropic",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 20,
    "hours": 13,
    "project": false,
    "url": "https://academy.claude.com/courses/claude-101",
    "topics": [
      "Navigate Claude conversations",
      "Provide useful task context",
      "Refine and compare responses",
      "Review output before reuse"
    ],
    "submodules": [
      {
        "title": "Navigate Claude conversations",
        "weight": 20,
        "url": "https://academy.claude.com/courses/claude-101"
      },
      {
        "title": "Provide useful task context",
        "weight": 25,
        "url": "https://academy.claude.com/courses/claude-101"
      },
      {
        "title": "Refine and compare responses",
        "weight": 25,
        "url": "https://academy.claude.com/courses/claude-101"
      },
      {
        "title": "Review output before reuse",
        "weight": 30,
        "url": "https://academy.claude.com/courses/claude-101"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What helps Claude produce a useful task response?",
      "options": [
        "Unrelated private information",
        "Relevant context and clear instructions",
        "No description of the desired result"
      ],
      "answer": 1,
      "explanation": "Relevant context and clear instructions. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m25",
    "title": "Claude Code in Action",
    "provider": "Anthropic",
    "track": "Generative AI, Prompt Engineering & AI Development",
    "trackIndex": 3,
    "week": 21,
    "hours": 13,
    "project": true,
    "url": "https://anthropic.skilljar.com/claude-code-in-action",
    "topics": [
      "Understand repository context",
      "Plan a bounded code change",
      "Review generated changes",
      "Test and iterate safely"
    ],
    "submodules": [
      {
        "title": "Understand repository context",
        "weight": 20,
        "url": "https://anthropic.skilljar.com/claude-code-in-action"
      },
      {
        "title": "Plan a bounded code change",
        "weight": 25,
        "url": "https://anthropic.skilljar.com/claude-code-in-action"
      },
      {
        "title": "Review generated changes",
        "weight": 25,
        "url": "https://anthropic.skilljar.com/claude-code-in-action"
      },
      {
        "title": "Test and iterate safely",
        "weight": 30,
        "url": "https://anthropic.skilljar.com/claude-code-in-action"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What should follow an AI-generated code change?",
      "options": [
        "Immediate release without inspection",
        "Review and tests",
        "Deletion of version history"
      ],
      "answer": 1,
      "explanation": "Review and tests. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m26",
    "title": "Certificate of Completion: Teaching the AI Fluency Framework",
    "provider": "Anthropic",
    "track": "AI Fluency, Product Management & Vibe Coding",
    "trackIndex": 4,
    "week": 22,
    "hours": 13,
    "project": false,
    "url": "https://anthropic.skilljar.com/teaching-ai-fluency",
    "topics": [
      "Define learner outcomes",
      "Teach the fluency framework",
      "Design guided practice",
      "Assess learner judgment"
    ],
    "submodules": [
      {
        "title": "Define learner outcomes",
        "weight": 20,
        "url": "https://anthropic.skilljar.com/teaching-ai-fluency"
      },
      {
        "title": "Teach the fluency framework",
        "weight": 25,
        "url": "https://anthropic.skilljar.com/teaching-ai-fluency"
      },
      {
        "title": "Design guided practice",
        "weight": 25,
        "url": "https://anthropic.skilljar.com/teaching-ai-fluency"
      },
      {
        "title": "Assess learner judgment",
        "weight": 30,
        "url": "https://anthropic.skilljar.com/teaching-ai-fluency"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "How should AI fluency learning be assessed?",
      "options": [
        "Only by prompt length",
        "By judgment and application in realistic tasks",
        "Only by tool popularity"
      ],
      "answer": 1,
      "explanation": "By judgment and application in realistic tasks. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m27",
    "title": "Vibe Coding Fundamentals",
    "provider": "University of Colorado",
    "track": "AI Fluency, Product Management & Vibe Coding",
    "trackIndex": 4,
    "week": 23,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/vibe-coding-fundamentals",
    "topics": [
      "Set up an AI coding workflow",
      "Specify functional requirements",
      "Debug through focused feedback",
      "Use checkpoints and review security"
    ],
    "submodules": [
      {
        "title": "Set up an AI coding workflow",
        "weight": 20,
        "url": "https://www.coursera.org/learn/vibe-coding-fundamentals"
      },
      {
        "title": "Specify functional requirements",
        "weight": 25,
        "url": "https://www.coursera.org/learn/vibe-coding-fundamentals"
      },
      {
        "title": "Debug through focused feedback",
        "weight": 25,
        "url": "https://www.coursera.org/learn/vibe-coding-fundamentals"
      },
      {
        "title": "Use checkpoints and review security",
        "weight": 30,
        "url": "https://www.coursera.org/learn/vibe-coding-fundamentals"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Why use checkpoints in AI-assisted development?",
      "options": [
        "To avoid testing",
        "To review and recover working versions",
        "To hide changes from reviewers"
      ],
      "answer": 1,
      "explanation": "To review and recover working versions. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m28",
    "title": "Vibe Coding 101 with Replit",
    "provider": "DeepLearning.AI",
    "track": "AI Fluency, Product Management & Vibe Coding",
    "trackIndex": 4,
    "week": 24,
    "hours": 13,
    "project": true,
    "url": "https://www.deeplearning.ai/courses/vibe-coding-101-with-replit",
    "topics": [
      "Plan an application with a PRD",
      "Build and inspect a prototype",
      "Add persistent application data",
      "Test and deploy an iteration"
    ],
    "submodules": [
      {
        "title": "Plan an application with a PRD",
        "weight": 20,
        "url": "https://www.deeplearning.ai/courses/vibe-coding-101-with-replit"
      },
      {
        "title": "Build and inspect a prototype",
        "weight": 25,
        "url": "https://www.deeplearning.ai/courses/vibe-coding-101-with-replit"
      },
      {
        "title": "Add persistent application data",
        "weight": 25,
        "url": "https://www.deeplearning.ai/courses/vibe-coding-101-with-replit"
      },
      {
        "title": "Test and deploy an iteration",
        "weight": 30,
        "url": "https://www.deeplearning.ai/courses/vibe-coding-101-with-replit"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What is the purpose of a PRD before building an app?",
      "options": [
        "To replace all testing",
        "To describe requirements and expected behavior",
        "To store passwords"
      ],
      "answer": 1,
      "explanation": "To describe requirements and expected behavior. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m29",
    "title": "Introduction to Software Product Management",
    "provider": "University of Alberta",
    "track": "AI Fluency, Product Management & Vibe Coding",
    "trackIndex": 4,
    "week": 25,
    "hours": 13,
    "project": false,
    "url": "https://www.coursera.org/learn/introduction-to-software-product-management",
    "topics": [
      "Understand the product manager role",
      "Connect requirements and value",
      "Apply Agile principles",
      "Reflect on a product delivery plan"
    ],
    "submodules": [
      {
        "title": "Understand the product manager role",
        "weight": 20,
        "url": "https://www.coursera.org/learn/introduction-to-software-product-management"
      },
      {
        "title": "Connect requirements and value",
        "weight": 25,
        "url": "https://www.coursera.org/learn/introduction-to-software-product-management"
      },
      {
        "title": "Apply Agile principles",
        "weight": 25,
        "url": "https://www.coursera.org/learn/introduction-to-software-product-management"
      },
      {
        "title": "Reflect on a product delivery plan",
        "weight": 30,
        "url": "https://www.coursera.org/learn/introduction-to-software-product-management"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "What is a key product management responsibility?",
      "options": [
        "Approve every feature without evidence",
        "Connect customer needs to product value",
        "Optimize only lines of code"
      ],
      "answer": 1,
      "explanation": "Connect customer needs to product value. Review the linked material and explain how this principle applies to your exercise."
    }
  },
  {
    "id": "v2m30",
    "title": "Introduction to Virtual Reality",
    "provider": "University of London",
    "track": "AI Fluency, Product Management & Vibe Coding",
    "trackIndex": 4,
    "week": 26,
    "hours": 13,
    "project": true,
    "url": "https://www.coursera.org/learn/introduction-virtual-reality",
    "topics": [
      "Explore VR hardware",
      "Compare VR applications",
      "Understand presence and perception",
      "Evaluate comfort and interaction constraints"
    ],
    "submodules": [
      {
        "title": "Explore VR hardware",
        "weight": 20,
        "url": "https://www.coursera.org/learn/introduction-virtual-reality"
      },
      {
        "title": "Compare VR applications",
        "weight": 25,
        "url": "https://www.coursera.org/learn/introduction-virtual-reality"
      },
      {
        "title": "Understand presence and perception",
        "weight": 25,
        "url": "https://www.coursera.org/learn/introduction-virtual-reality"
      },
      {
        "title": "Evaluate comfort and interaction constraints",
        "weight": 30,
        "url": "https://www.coursera.org/learn/introduction-virtual-reality"
      }
    ],
    "sourceNote": "Official course or documentation. Individual lessons may require enrollment.",
    "quiz": {
      "question": "Which issue is important for VR comfort?",
      "options": [
        "Only the project filename",
        "Latency and motion mismatch",
        "Only the number of menus"
      ],
      "answer": 1,
      "explanation": "Latency and motion mismatch. Review the linked material and explain how this principle applies to your exercise."
    }
  }
];
