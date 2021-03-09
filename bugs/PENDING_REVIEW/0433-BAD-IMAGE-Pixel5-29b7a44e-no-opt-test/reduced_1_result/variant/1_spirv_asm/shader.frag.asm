; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 176
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %51 %162
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
               OpName %51 "gl_FragCoord"
               OpName %69 "th"
               OpName %109 "center"
               OpName %113 "dist"
               OpName %116 "angle"
               OpName %117 "param"
               OpName %125 "coord"
               OpName %130 "coord1"
               OpName %136 "param"
               OpName %138 "coord2"
               OpName %144 "param"
               OpName %146 "coord3"
               OpName %147 "param"
               OpName %162 "_GLF_color"
               OpName %166 "tex"
               OpDecorate %51 BuiltIn FragCoord
               OpDecorate %162 Location 0
               OpDecorate %166 RelaxedPrecision
               OpDecorate %166 DescriptorSet 0
               OpDecorate %166 Binding 0
               OpDecorate %167 RelaxedPrecision
               OpDecorate %169 RelaxedPrecision
               OpDecorate %171 RelaxedPrecision
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
         %49 = OpTypeVector %6 4
         %50 = OpTypePointer Input %49
         %51 = OpVariable %50 Input
         %52 = OpTypePointer Input %6
         %63 = OpConstantTrue %23
         %70 = OpConstant %6 0.970000029
         %71 = OpConstant %6 0.189999998
         %88 = OpConstant %6 0.5
         %96 = OpConstant %6 1
        %111 = OpConstantComposite %7 %88 %88
        %128 = OpConstant %6 0.00390625
        %132 = OpConstant %6 0.078125
        %133 = OpConstant %6 -0.3125
        %134 = OpConstantComposite %7 %132 %133
        %140 = OpConstant %6 -0.234375
        %141 = OpConstant %6 0.15625
        %142 = OpConstantComposite %7 %140 %141
        %156 = OpConstant %6 256
        %161 = OpTypePointer Output %49
        %162 = OpVariable %161 Output
        %163 = OpTypeImage %6 2D 0 0 0 1 Unknown
        %164 = OpTypeSampledImage %163
        %165 = OpTypePointer UniformConstant %164
        %166 = OpVariable %165 UniformConstant
        %170 = OpTypeVector %6 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %125 = OpVariable %8 Function
        %130 = OpVariable %8 Function
        %136 = OpVariable %8 Function
        %138 = OpVariable %8 Function
        %144 = OpVariable %8 Function
        %146 = OpVariable %8 Function
        %147 = OpVariable %8 Function
        %126 = OpLoad %49 %51
        %127 = OpVectorShuffle %7 %126 %126 0 1
        %129 = OpVectorTimesScalar %7 %127 %128
               OpStore %125 %129
        %131 = OpLoad %7 %125
        %135 = OpFAdd %7 %131 %134
               OpStore %136 %135
        %137 = OpFunctionCall %7 %15 %136
               OpStore %130 %137
        %139 = OpLoad %7 %125
        %143 = OpFAdd %7 %139 %142
               OpStore %144 %143
        %145 = OpFunctionCall %7 %15 %144
               OpStore %138 %145
        %148 = OpLoad %7 %125
               OpStore %147 %148
        %149 = OpFunctionCall %7 %15 %147
               OpStore %146 %149
        %150 = OpLoad %7 %130
        %151 = OpLoad %7 %138
        %152 = OpFSub %7 %150 %151
        %153 = OpLoad %7 %146
        %154 = OpFAdd %7 %152 %153
               OpStore %125 %154
        %155 = OpLoad %7 %125
        %157 = OpVectorTimesScalar %7 %155 %156
        %158 = OpExtInst %7 %1 Floor %157
        %159 = OpCompositeConstruct %7 %156 %156
        %160 = OpFDiv %7 %158 %159
               OpStore %125 %160
        %167 = OpLoad %164 %166
        %168 = OpLoad %7 %125
        %169 = OpImageSampleImplicitLod %49 %167 %168
        %171 = OpVectorShuffle %170 %169 %169 0 1 2
        %172 = OpCompositeExtract %6 %171 0
        %173 = OpCompositeExtract %6 %171 1
        %174 = OpCompositeExtract %6 %171 2
        %175 = OpCompositeConstruct %49 %172 %173 %174 %96
               OpStore %162 %175
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %6 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
         %18 = OpVariable %17 Function
         %29 = OpVariable %8 Function
         %42 = OpVariable %17 Function
         %69 = OpVariable %17 Function
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
         %53 = OpAccessChain %52 %51 %33
         %54 = OpLoad %6 %53
         %55 = OpFOrdLessThan %23 %54 %27
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
               OpBranch %58
         %58 = OpLabel
               OpLoopMerge %60 %61 None
               OpBranch %59
         %59 = OpLabel
               OpKill
         %61 = OpLabel
               OpBranch %58
         %60 = OpLabel
               OpUnreachable
         %57 = OpLabel
         %64 = OpAccessChain %17 %29 %33
         %65 = OpLoad %6 %64
         %66 = OpAccessChain %17 %29 %36
         %67 = OpLoad %6 %66
         %68 = OpFDiv %6 %65 %67
               OpStore %42 %68
               OpBranch %41
         %41 = OpLabel
         %72 = OpLoad %6 %42
         %73 = OpFMul %6 %71 %72
         %74 = OpLoad %6 %42
         %75 = OpFMul %6 %73 %74
         %76 = OpFSub %6 %70 %75
         %77 = OpLoad %6 %42
         %78 = OpFMul %6 %76 %77
         %79 = OpLoad %6 %18
         %80 = OpFMul %6 %78 %79
               OpStore %69 %80
         %81 = OpAccessChain %17 %29 %33
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %17 %29 %36
         %84 = OpLoad %6 %83
         %85 = OpFOrdLessThan %23 %82 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %87
         %86 = OpLabel
         %89 = OpLoad %6 %69
         %90 = OpFSub %6 %88 %89
               OpStore %69 %90
               OpBranch %87
         %87 = OpLabel
         %91 = OpAccessChain %17 %10 %36
         %92 = OpLoad %6 %91
         %93 = OpFOrdLessThan %23 %92 %27
               OpSelectionMerge %95 None
               OpBranchConditional %93 %94 %95
         %94 = OpLabel
         %97 = OpLoad %6 %69
         %98 = OpFSub %6 %96 %97
               OpStore %69 %98
               OpBranch %95
         %95 = OpLabel
         %99 = OpAccessChain %17 %10 %33
        %100 = OpLoad %6 %99
        %101 = OpFOrdLessThan %23 %100 %27
               OpSelectionMerge %103 None
               OpBranchConditional %101 %102 %103
        %102 = OpLabel
        %104 = OpLoad %6 %69
        %105 = OpFNegate %6 %104
               OpStore %69 %105
               OpBranch %103
        %103 = OpLabel
        %106 = OpLoad %6 %69
               OpReturnValue %106
               OpFunctionEnd
         %15 = OpFunction %7 None %13
         %14 = OpFunctionParameter %8
         %16 = OpLabel
        %109 = OpVariable %8 Function
        %113 = OpVariable %17 Function
        %116 = OpVariable %17 Function
        %117 = OpVariable %8 Function
        %110 = OpLoad %7 %14
        %112 = OpFSub %7 %110 %111
               OpStore %109 %112
        %114 = OpLoad %7 %109
        %115 = OpExtInst %6 %1 Length %114
               OpStore %113 %115
        %118 = OpLoad %7 %109
               OpStore %117 %118
        %119 = OpFunctionCall %6 %11 %117
               OpStore %116 %119
        %120 = OpLoad %6 %113
        %121 = OpLoad %6 %116
        %122 = OpCompositeConstruct %7 %120 %121
               OpReturnValue %122
               OpFunctionEnd
