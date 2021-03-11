; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 164
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %113 %150
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "ReallyApproxNormalizedAtan2(vf2;"
               OpName %10 "v"
               OpName %15 "polarize(vf2;"
               OpName %14 "coord"
               OpName %18 "pi2"
               OpName %29 "a"
               OpName %42 "z"
               OpName %54 "th"
               OpName %94 "center"
               OpName %98 "dist"
               OpName %101 "angle"
               OpName %102 "param"
               OpName %110 "coord"
               OpName %113 "gl_FragCoord"
               OpName %118 "coord1"
               OpName %124 "param"
               OpName %126 "coord2"
               OpName %132 "param"
               OpName %134 "coord3"
               OpName %135 "param"
               OpName %150 "_GLF_color"
               OpName %154 "tex"
               OpDecorate %113 BuiltIn FragCoord
               OpDecorate %150 Location 0
               OpDecorate %154 RelaxedPrecision
               OpDecorate %154 DescriptorSet 0
               OpDecorate %154 Binding 0
               OpDecorate %155 RelaxedPrecision
               OpDecorate %157 RelaxedPrecision
               OpDecorate %159 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %6 %8
         %13 = OpTypeFunction %7 %8
         %17 = OpTypePointer Function %6
         %19 = OpConstant %6 0.318309873
         %22 = OpConstant %6 0.00100000005
         %23 = OpTypeBool
         %27 = OpConstant %6 0
         %32 = OpTypeInt 32 0
         %33 = OpConstant %32 1
         %36 = OpConstant %32 0
         %55 = OpConstant %6 0.970000029
         %56 = OpConstant %6 0.189999998
         %73 = OpConstant %6 0.5
         %81 = OpConstant %6 1
         %96 = OpConstantComposite %7 %73 %73
        %111 = OpTypeVector %6 4
        %112 = OpTypePointer Input %111
        %113 = OpVariable %112 Input
        %116 = OpConstant %6 0.00390625
        %120 = OpConstant %6 0.078125
        %121 = OpConstant %6 -0.3125
        %122 = OpConstantComposite %7 %120 %121
        %128 = OpConstant %6 -0.234375
        %129 = OpConstant %6 0.15625
        %130 = OpConstantComposite %7 %128 %129
        %144 = OpConstant %6 256
        %149 = OpTypePointer Output %111
        %150 = OpVariable %149 Output
        %151 = OpTypeImage %6 2D 0 0 0 1 Unknown
        %152 = OpTypeSampledImage %151
        %153 = OpTypePointer UniformConstant %152
        %154 = OpVariable %153 UniformConstant
        %158 = OpTypeVector %6 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %110 = OpVariable %8 Function
        %118 = OpVariable %8 Function
        %124 = OpVariable %8 Function
        %126 = OpVariable %8 Function
        %132 = OpVariable %8 Function
        %134 = OpVariable %8 Function
        %135 = OpVariable %8 Function
        %114 = OpLoad %111 %113
        %115 = OpVectorShuffle %7 %114 %114 0 1
        %117 = OpVectorTimesScalar %7 %115 %116
               OpStore %110 %117
        %119 = OpLoad %7 %110
        %123 = OpFAdd %7 %119 %122
               OpStore %124 %123
        %125 = OpFunctionCall %7 %15 %124
               OpStore %118 %125
        %127 = OpLoad %7 %110
        %131 = OpFAdd %7 %127 %130
               OpStore %132 %131
        %133 = OpFunctionCall %7 %15 %132
               OpStore %126 %133
        %136 = OpLoad %7 %110
               OpStore %135 %136
        %137 = OpFunctionCall %7 %15 %135
               OpStore %134 %137
        %138 = OpLoad %7 %118
        %139 = OpLoad %7 %126
        %140 = OpFSub %7 %138 %139
        %141 = OpLoad %7 %134
        %142 = OpFAdd %7 %140 %141
               OpStore %110 %142
        %143 = OpLoad %7 %110
        %145 = OpVectorTimesScalar %7 %143 %144
        %146 = OpExtInst %7 %1 Floor %145
        %147 = OpCompositeConstruct %7 %144 %144
        %148 = OpFDiv %7 %146 %147
               OpStore %110 %148
        %155 = OpLoad %152 %154
        %156 = OpLoad %7 %110
        %157 = OpImageSampleImplicitLod %111 %155 %156
        %159 = OpVectorShuffle %158 %157 %157 0 1 2
        %160 = OpCompositeExtract %6 %159 0
        %161 = OpCompositeExtract %6 %159 1
        %162 = OpCompositeExtract %6 %159 2
        %163 = OpCompositeConstruct %111 %160 %161 %162 %81
               OpStore %150 %163
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %6 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
         %18 = OpVariable %17 Function
         %29 = OpVariable %8 Function
         %42 = OpVariable %17 Function
         %54 = OpVariable %17 Function
               OpStore %18 %19
         %20 = OpLoad %7 %10
         %21 = OpExtInst %6 %1 Length %20
         %24 = OpFOrdLessThan %23 %21 %22
               OpSelectionMerge %26 None
               OpBranchConditional %24 %25 %26
         %25 = OpLabel
               OpReturnValue %27
         %26 = OpLabel
         %30 = OpLoad %7 %10
         %31 = OpExtInst %7 %1 FAbs %30
               OpStore %29 %31
         %34 = OpAccessChain %17 %29 %33
         %35 = OpLoad %6 %34
         %37 = OpAccessChain %17 %29 %36
         %38 = OpLoad %6 %37
         %39 = OpFOrdGreaterThan %23 %35 %38
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %48
         %40 = OpLabel
         %43 = OpAccessChain %17 %29 %36
         %44 = OpLoad %6 %43
         %45 = OpAccessChain %17 %29 %33
         %46 = OpLoad %6 %45
         %47 = OpFDiv %6 %44 %46
               OpStore %42 %47
               OpBranch %41
         %48 = OpLabel
         %49 = OpAccessChain %17 %29 %33
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %17 %29 %36
         %52 = OpLoad %6 %51
         %53 = OpFDiv %6 %50 %52
               OpStore %42 %53
               OpBranch %41
         %41 = OpLabel
         %57 = OpLoad %6 %42
         %58 = OpFMul %6 %56 %57
         %59 = OpLoad %6 %42
         %60 = OpFMul %6 %58 %59
         %61 = OpFSub %6 %55 %60
         %62 = OpLoad %6 %42
         %63 = OpFMul %6 %61 %62
         %64 = OpLoad %6 %18
         %65 = OpFMul %6 %63 %64
               OpStore %54 %65
         %66 = OpAccessChain %17 %29 %33
         %67 = OpLoad %6 %66
         %68 = OpAccessChain %17 %29 %36
         %69 = OpLoad %6 %68
         %70 = OpFOrdLessThan %23 %67 %69
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %72
         %71 = OpLabel
         %74 = OpLoad %6 %54
         %75 = OpFSub %6 %73 %74
               OpStore %54 %75
               OpBranch %72
         %72 = OpLabel
         %76 = OpAccessChain %17 %10 %36
         %77 = OpLoad %6 %76
         %78 = OpFOrdLessThan %23 %77 %27
               OpSelectionMerge %80 None
               OpBranchConditional %78 %79 %80
         %79 = OpLabel
         %82 = OpLoad %6 %54
         %83 = OpFSub %6 %81 %82
               OpStore %54 %83
               OpBranch %80
         %80 = OpLabel
         %84 = OpAccessChain %17 %10 %33
         %85 = OpLoad %6 %84
         %86 = OpFOrdLessThan %23 %85 %27
               OpSelectionMerge %88 None
               OpBranchConditional %86 %87 %88
         %87 = OpLabel
         %89 = OpLoad %6 %54
         %90 = OpFNegate %6 %89
               OpStore %54 %90
               OpBranch %88
         %88 = OpLabel
         %91 = OpLoad %6 %54
               OpReturnValue %91
               OpFunctionEnd
         %15 = OpFunction %7 None %13
         %14 = OpFunctionParameter %8
         %16 = OpLabel
         %94 = OpVariable %8 Function
         %98 = OpVariable %17 Function
        %101 = OpVariable %17 Function
        %102 = OpVariable %8 Function
         %95 = OpLoad %7 %14
         %97 = OpFSub %7 %95 %96
               OpStore %94 %97
         %99 = OpLoad %7 %94
        %100 = OpExtInst %6 %1 Length %99
               OpStore %98 %100
        %103 = OpLoad %7 %94
               OpStore %102 %103
        %104 = OpFunctionCall %6 %11 %102
               OpStore %101 %104
        %105 = OpLoad %6 %98
        %106 = OpLoad %6 %101
        %107 = OpCompositeConstruct %7 %105 %106
               OpReturnValue %107
               OpFunctionEnd
