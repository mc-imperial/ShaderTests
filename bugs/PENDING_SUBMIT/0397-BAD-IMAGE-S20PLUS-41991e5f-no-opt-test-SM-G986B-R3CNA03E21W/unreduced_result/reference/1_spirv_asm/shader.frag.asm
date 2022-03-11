; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 145
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %85 %137
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "compute_value(f1;f1;"
               OpName %9 "limit"
               OpName %10 "thirty_two"
               OpName %13 "result"
               OpName %17 "i"
               OpName %66 "c"
               OpName %71 "thirty_two"
               OpName %73 "buf0"
               OpMemberName %73 0 "resolution"
               OpName %75 ""
               OpName %85 "gl_FragCoord"
               OpName %86 "param"
               OpName %90 "param"
               OpName %94 "param"
               OpName %98 "param"
               OpName %109 "i"
               OpName %137 "_GLF_color"
               OpMemberDecorate %73 0 Offset 0
               OpDecorate %73 Block
               OpDecorate %75 DescriptorSet 0
               OpDecorate %75 Binding 0
               OpDecorate %85 BuiltIn FragCoord
               OpDecorate %137 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7 %7
         %14 = OpConstant %6 -0.5
         %15 = OpTypeInt 32 1
         %16 = OpTypePointer Function %15
         %18 = OpConstant %15 1
         %25 = OpConstant %15 800
         %26 = OpTypeBool
         %29 = OpConstant %15 32
         %31 = OpConstant %15 0
         %35 = OpConstant %6 0.400000006
         %44 = OpConstant %6 0.00999999978
         %48 = OpConstant %6 100
         %64 = OpTypeVector %6 3
         %65 = OpTypePointer Function %64
         %67 = OpConstant %6 7
         %68 = OpConstant %6 8
         %69 = OpConstant %6 9
         %70 = OpConstantComposite %64 %67 %68 %69
         %72 = OpTypeVector %6 2
         %73 = OpTypeStruct %72
         %74 = OpTypePointer Uniform %73
         %75 = OpVariable %74 Uniform
         %76 = OpTypeInt 32 0
         %77 = OpConstant %76 0
         %78 = OpTypePointer Uniform %6
         %83 = OpTypeVector %6 4
         %84 = OpTypePointer Input %83
         %85 = OpVariable %84 Input
         %87 = OpTypePointer Input %6
         %95 = OpConstant %76 1
        %107 = OpConstant %76 2
        %116 = OpConstant %15 3
        %121 = OpConstant %6 1
        %136 = OpTypePointer Output %83
        %137 = OpVariable %136 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %66 = OpVariable %65 Function
         %71 = OpVariable %7 Function
         %86 = OpVariable %7 Function
         %90 = OpVariable %7 Function
         %94 = OpVariable %7 Function
         %98 = OpVariable %7 Function
        %109 = OpVariable %16 Function
               OpStore %66 %70
         %79 = OpAccessChain %78 %75 %31 %77
         %80 = OpLoad %6 %79
         %81 = OpFDiv %6 %80 %68
         %82 = OpExtInst %6 %1 Round %81
               OpStore %71 %82
         %88 = OpAccessChain %87 %85 %77
         %89 = OpLoad %6 %88
               OpStore %86 %89
         %91 = OpLoad %6 %71
               OpStore %90 %91
         %92 = OpFunctionCall %6 %11 %86 %90
         %93 = OpAccessChain %7 %66 %77
               OpStore %93 %92
         %96 = OpAccessChain %87 %85 %95
         %97 = OpLoad %6 %96
               OpStore %94 %97
         %99 = OpLoad %6 %71
               OpStore %98 %99
        %100 = OpFunctionCall %6 %11 %94 %98
        %101 = OpAccessChain %7 %66 %95
               OpStore %101 %100
        %102 = OpAccessChain %7 %66 %77
        %103 = OpLoad %6 %102
        %104 = OpAccessChain %7 %66 %95
        %105 = OpLoad %6 %104
        %106 = OpFAdd %6 %103 %105
        %108 = OpAccessChain %7 %66 %107
               OpStore %108 %106
               OpStore %109 %31
               OpBranch %110
        %110 = OpLabel
               OpLoopMerge %112 %113 None
               OpBranch %114
        %114 = OpLabel
        %115 = OpLoad %15 %109
        %117 = OpSLessThan %26 %115 %116
               OpBranchConditional %117 %111 %112
        %111 = OpLabel
        %118 = OpLoad %15 %109
        %119 = OpAccessChain %7 %66 %118
        %120 = OpLoad %6 %119
        %122 = OpFOrdGreaterThanEqual %26 %120 %121
               OpSelectionMerge %124 None
               OpBranchConditional %122 %123 %124
        %123 = OpLabel
        %125 = OpLoad %15 %109
        %126 = OpLoad %15 %109
        %127 = OpAccessChain %7 %66 %126
        %128 = OpLoad %6 %127
        %129 = OpLoad %15 %109
        %130 = OpAccessChain %7 %66 %129
        %131 = OpLoad %6 %130
        %132 = OpFMul %6 %128 %131
        %133 = OpAccessChain %7 %66 %125
               OpStore %133 %132
               OpBranch %124
        %124 = OpLabel
               OpBranch %113
        %113 = OpLabel
        %134 = OpLoad %15 %109
        %135 = OpIAdd %15 %134 %18
               OpStore %109 %135
               OpBranch %110
        %112 = OpLabel
        %138 = OpLoad %64 %66
        %139 = OpExtInst %64 %1 FAbs %138
        %140 = OpExtInst %64 %1 Normalize %139
        %141 = OpCompositeExtract %6 %140 0
        %142 = OpCompositeExtract %6 %140 1
        %143 = OpCompositeExtract %6 %140 2
        %144 = OpCompositeConstruct %83 %141 %142 %143 %121
               OpStore %137 %144
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %10 = OpFunctionParameter %7
         %12 = OpLabel
         %13 = OpVariable %7 Function
         %17 = OpVariable %16 Function
               OpStore %13 %14
               OpStore %17 %18
               OpBranch %19
         %19 = OpLabel
               OpLoopMerge %21 %22 None
               OpBranch %23
         %23 = OpLabel
         %24 = OpLoad %15 %17
         %27 = OpSLessThan %26 %24 %25
               OpBranchConditional %27 %20 %21
         %20 = OpLabel
         %28 = OpLoad %15 %17
         %30 = OpSMod %15 %28 %29
         %32 = OpIEqual %26 %30 %31
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %38
         %33 = OpLabel
         %36 = OpLoad %6 %13
         %37 = OpFAdd %6 %36 %35
               OpStore %13 %37
               OpBranch %34
         %38 = OpLabel
         %39 = OpLoad %15 %17
         %40 = OpConvertSToF %6 %39
         %41 = OpLoad %6 %10
         %42 = OpExtInst %6 %1 Round %41
         %43 = OpFMod %6 %40 %42
         %45 = OpFOrdLessThanEqual %26 %43 %44
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %47
         %46 = OpLabel
         %49 = OpLoad %6 %13
         %50 = OpFAdd %6 %49 %48
               OpStore %13 %50
               OpBranch %47
         %47 = OpLabel
               OpBranch %34
         %34 = OpLabel
         %51 = OpLoad %15 %17
         %52 = OpConvertSToF %6 %51
         %53 = OpLoad %6 %9
         %54 = OpFOrdGreaterThanEqual %26 %52 %53
               OpSelectionMerge %56 None
               OpBranchConditional %54 %55 %56
         %55 = OpLabel
         %57 = OpLoad %6 %13
               OpReturnValue %57
         %56 = OpLabel
               OpBranch %22
         %22 = OpLabel
         %59 = OpLoad %15 %17
         %60 = OpIAdd %15 %59 %18
               OpStore %17 %60
               OpBranch %19
         %21 = OpLabel
         %61 = OpLoad %6 %13
               OpReturnValue %61
               OpFunctionEnd
