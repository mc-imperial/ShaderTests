; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 166
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %115 %152
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
               OpName %94 "pi"
               OpName %96 "center"
               OpName %100 "dist"
               OpName %103 "angle"
               OpName %104 "param"
               OpName %112 "coord"
               OpName %115 "gl_FragCoord"
               OpName %120 "coord1"
               OpName %126 "param"
               OpName %128 "coord2"
               OpName %134 "param"
               OpName %136 "coord3"
               OpName %137 "param"
               OpName %152 "_GLF_color"
               OpName %156 "tex"
               OpDecorate %115 BuiltIn FragCoord
               OpDecorate %152 Location 0
               OpDecorate %156 RelaxedPrecision
               OpDecorate %156 DescriptorSet 0
               OpDecorate %156 Binding 0
               OpDecorate %157 RelaxedPrecision
               OpDecorate %159 RelaxedPrecision
               OpDecorate %161 RelaxedPrecision
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
         %95 = OpConstant %6 3.14159298
         %98 = OpConstantComposite %7 %73 %73
        %113 = OpTypeVector %6 4
        %114 = OpTypePointer Input %113
        %115 = OpVariable %114 Input
        %118 = OpConstant %6 0.00390625
        %122 = OpConstant %6 0.078125
        %123 = OpConstant %6 -0.3125
        %124 = OpConstantComposite %7 %122 %123
        %130 = OpConstant %6 -0.234375
        %131 = OpConstant %6 0.15625
        %132 = OpConstantComposite %7 %130 %131
        %146 = OpConstant %6 256
        %151 = OpTypePointer Output %113
        %152 = OpVariable %151 Output
        %153 = OpTypeImage %6 2D 0 0 0 1 Unknown
        %154 = OpTypeSampledImage %153
        %155 = OpTypePointer UniformConstant %154
        %156 = OpVariable %155 UniformConstant
        %160 = OpTypeVector %6 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %112 = OpVariable %8 Function
        %120 = OpVariable %8 Function
        %126 = OpVariable %8 Function
        %128 = OpVariable %8 Function
        %134 = OpVariable %8 Function
        %136 = OpVariable %8 Function
        %137 = OpVariable %8 Function
        %116 = OpLoad %113 %115
        %117 = OpVectorShuffle %7 %116 %116 0 1
        %119 = OpVectorTimesScalar %7 %117 %118
               OpStore %112 %119
        %121 = OpLoad %7 %112
        %125 = OpFAdd %7 %121 %124
               OpStore %126 %125
        %127 = OpFunctionCall %7 %15 %126
               OpStore %120 %127
        %129 = OpLoad %7 %112
        %133 = OpFAdd %7 %129 %132
               OpStore %134 %133
        %135 = OpFunctionCall %7 %15 %134
               OpStore %128 %135
        %138 = OpLoad %7 %112
               OpStore %137 %138
        %139 = OpFunctionCall %7 %15 %137
               OpStore %136 %139
        %140 = OpLoad %7 %120
        %141 = OpLoad %7 %128
        %142 = OpFSub %7 %140 %141
        %143 = OpLoad %7 %136
        %144 = OpFAdd %7 %142 %143
               OpStore %112 %144
        %145 = OpLoad %7 %112
        %147 = OpVectorTimesScalar %7 %145 %146
        %148 = OpExtInst %7 %1 Floor %147
        %149 = OpCompositeConstruct %7 %146 %146
        %150 = OpFDiv %7 %148 %149
               OpStore %112 %150
        %157 = OpLoad %154 %156
        %158 = OpLoad %7 %112
        %159 = OpImageSampleImplicitLod %113 %157 %158
        %161 = OpVectorShuffle %160 %159 %159 0 1 2
        %162 = OpCompositeExtract %6 %161 0
        %163 = OpCompositeExtract %6 %161 1
        %164 = OpCompositeExtract %6 %161 2
        %165 = OpCompositeConstruct %113 %162 %163 %164 %81
               OpStore %152 %165
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
         %94 = OpVariable %17 Function
         %96 = OpVariable %8 Function
        %100 = OpVariable %17 Function
        %103 = OpVariable %17 Function
        %104 = OpVariable %8 Function
               OpStore %94 %95
         %97 = OpLoad %7 %14
         %99 = OpFSub %7 %97 %98
               OpStore %96 %99
        %101 = OpLoad %7 %96
        %102 = OpExtInst %6 %1 Length %101
               OpStore %100 %102
        %105 = OpLoad %7 %96
               OpStore %104 %105
        %106 = OpFunctionCall %6 %11 %104
               OpStore %103 %106
        %107 = OpLoad %6 %100
        %108 = OpLoad %6 %103
        %109 = OpCompositeConstruct %7 %107 %108
               OpReturnValue %109
               OpFunctionEnd
