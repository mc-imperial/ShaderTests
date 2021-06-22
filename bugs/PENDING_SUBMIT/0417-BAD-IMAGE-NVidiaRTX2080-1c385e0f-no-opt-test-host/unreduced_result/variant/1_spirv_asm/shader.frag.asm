; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 175
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %85
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "uvstep"
               OpName %17 "slope"
               OpName %19 "coord"
               OpName %22 "gl_FragCoord"
               OpName %26 "refh"
               OpName %32 "tex"
               OpName %46 "h"
               OpName %85 "_GLF_color"
               OpName %172 "buf0"
               OpMemberName %172 0 "injectionSwitch"
               OpName %174 ""
               OpDecorate %8 RelaxedPrecision
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %32 RelaxedPrecision
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 1
               OpDecorate %33 RelaxedPrecision
               OpDecorate %35 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %39 RelaxedPrecision
               OpDecorate %47 RelaxedPrecision
               OpDecorate %49 RelaxedPrecision
               OpDecorate %50 RelaxedPrecision
               OpDecorate %60 RelaxedPrecision
               OpDecorate %77 RelaxedPrecision
               OpDecorate %79 RelaxedPrecision
               OpDecorate %80 RelaxedPrecision
               OpDecorate %81 RelaxedPrecision
               OpDecorate %83 RelaxedPrecision
               OpDecorate %85 Location 0
               OpDecorate %86 RelaxedPrecision
               OpMemberDecorate %172 0 Offset 0
               OpDecorate %172 Block
               OpDecorate %174 DescriptorSet 0
               OpDecorate %174 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpConstant %10 0.00390625
         %15 = OpConstantComposite %11 %14 %14
         %16 = OpTypePointer Function %10
         %18 = OpConstant %10 0.0078125
         %20 = OpTypeVector %10 4
         %21 = OpTypePointer Input %20
         %22 = OpVariable %21 Input
         %27 = OpConstant %10 0
         %28 = OpConstantComposite %20 %27 %27 %27 %27
         %29 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %30 = OpTypeSampledImage %29
         %31 = OpTypePointer UniformConstant %30
         %32 = OpVariable %31 UniformConstant
         %37 = OpTypeInt 32 0
         %38 = OpConstant %37 1
         %58 = OpTypeBool
         %61 = OpConstant %6 32
         %70 = OpTypeMatrix %11 2
         %71 = OpConstant %10 1
         %72 = OpConstantComposite %11 %71 %27
         %73 = OpConstantComposite %11 %71 %71
         %74 = OpConstantComposite %70 %72 %73
         %82 = OpConstant %6 1
         %84 = OpTypePointer Output %20
         %85 = OpVariable %84 Output
         %88 = OpConstant %10 32
         %89 = OpConstantComposite %11 %27 %27
         %90 = OpConstantComposite %70 %89 %89
         %94 = OpConstant %10 0.03125
         %97 = OpConstant %10 -2.79999995
         %99 = OpConstantTrue %58
        %100 = OpTypePointer Function %20
        %104 = OpConstant %10 -3011.13721
        %105 = OpConstant %10 0.200000003
        %106 = OpConstant %37 2
        %107 = OpTypePointer Input %10
        %110 = OpConstant %37 3
        %114 = OpConstant %37 0
        %118 = OpTypeVector %10 3
        %119 = OpTypeMatrix %118 3
        %134 = OpConstant %10 -0.800000012
        %135 = OpConstant %10 -25.0699997
        %137 = OpTypeVector %58 4
        %138 = OpConstantFalse %58
        %139 = OpConstantComposite %137 %99 %99 %138 %138
        %142 = OpConstant %10 -44.0099983
        %143 = OpConstant %10 3165.3877
        %144 = OpConstant %10 -9061.6748
        %145 = OpConstant %10 -2.70000005
        %146 = OpConstantComposite %20 %142 %143 %144 %145
        %151 = OpTypeVector %58 2
        %159 = OpTypeMatrix %11 3
        %172 = OpTypeStruct %11
        %173 = OpTypePointer Uniform %172
        %174 = OpVariable %173 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %17 = OpVariable %16 Function
         %19 = OpVariable %12 Function
         %26 = OpVariable %16 Function
         %46 = OpVariable %16 Function
        %101 = OpVariable %100 Function
               OpStore %8 %9
               OpStore %13 %15
               OpStore %17 %18
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
               OpStore %19 %25
         %33 = OpLoad %30 %32
         %34 = OpLoad %11 %19
         %35 = OpImageSampleImplicitLod %20 %33 %34
         %36 = OpFAdd %20 %28 %35
         %39 = OpCompositeExtract %10 %36 1
               OpStore %26 %39
         %40 = OpLoad %11 %13
         %41 = OpLoad %11 %19
         %42 = OpFSub %11 %41 %40
               OpStore %19 %42
         %43 = OpLoad %10 %17
         %44 = OpLoad %10 %26
         %45 = OpFAdd %10 %44 %43
               OpStore %26 %45
         %47 = OpLoad %30 %32
         %48 = OpLoad %11 %19
         %49 = OpImageSampleImplicitLod %20 %47 %48
         %50 = OpCompositeExtract %10 %49 1
               OpStore %46 %50
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %55
         %55 = OpLabel
         %56 = OpLoad %10 %46
         %57 = OpLoad %10 %26
         %59 = OpFOrdLessThan %58 %56 %57
         %60 = OpLoad %6 %8
         %62 = OpSLessThan %58 %60 %61
         %63 = OpLogicalAnd %58 %59 %62
               OpBranchConditional %63 %52 %53
         %52 = OpLabel
         %64 = OpLoad %11 %13
         %65 = OpLoad %11 %19
         %66 = OpFSub %11 %65 %64
               OpStore %19 %66
         %67 = OpLoad %10 %17
         %68 = OpLoad %10 %26
         %69 = OpFAdd %10 %68 %67
               OpStore %26 %69
         %75 = OpExtInst %10 %1 Determinant %74
         %76 = OpFDiv %10 %69 %75
         %77 = OpLoad %30 %32
         %78 = OpLoad %11 %19
         %79 = OpImageSampleImplicitLod %20 %77 %78
         %80 = OpCompositeExtract %10 %79 1
               OpStore %46 %80
         %81 = OpLoad %6 %8
         %83 = OpIAdd %6 %81 %82
               OpStore %8 %83
               OpBranch %54
         %54 = OpLabel
               OpBranch %51
         %53 = OpLabel
         %86 = OpLoad %6 %8
         %87 = OpConvertSToF %10 %86
         %91 = OpExtInst %10 %1 Determinant %90
         %92 = OpFAdd %10 %88 %91
         %93 = OpFDiv %10 %71 %92
         %95 = OpExtInst %10 %1 FMax %93 %94
         %96 = OpFMul %10 %95 %71
         %98 = OpLoad %20 %22
               OpSelectionMerge %103 None
               OpBranchConditional %99 %102 %141
        %102 = OpLabel
        %108 = OpAccessChain %107 %22 %106
        %109 = OpLoad %10 %108
        %111 = OpAccessChain %107 %22 %110
        %112 = OpLoad %10 %111
        %113 = OpCompositeConstruct %20 %104 %105 %109 %112
        %115 = OpAccessChain %107 %22 %114
        %116 = OpLoad %10 %115
        %117 = OpLoad %20 %22
        %120 = OpCompositeExtract %10 %117 0
        %121 = OpCompositeExtract %10 %117 1
        %122 = OpCompositeExtract %10 %117 2
        %123 = OpCompositeExtract %10 %117 3
        %124 = OpCompositeConstruct %118 %120 %121 %122
        %125 = OpCompositeConstruct %118 %123 %71 %27
        %126 = OpCompositeConstruct %118 %27 %71 %27
        %127 = OpCompositeConstruct %119 %124 %125 %126
        %128 = OpCompositeExtract %10 %127 0 0
        %129 = OpCompositeExtract %10 %127 0 1
        %130 = OpCompositeExtract %10 %127 0 2
        %131 = OpCompositeExtract %10 %127 1 0
        %132 = OpCompositeConstruct %20 %128 %129 %130 %131
        %133 = OpCompositeExtract %10 %132 1
        %136 = OpCompositeConstruct %20 %116 %133 %134 %135
        %140 = OpSelect %20 %139 %136 %113
               OpStore %101 %140
               OpBranch %103
        %141 = OpLabel
               OpStore %101 %146
               OpBranch %103
        %103 = OpLabel
        %147 = OpLoad %20 %101
        %148 = OpExtInst %20 %1 FMax %98 %147
        %149 = OpCompositeExtract %10 %148 0
        %150 = OpFOrdLessThan %58 %149 %27
        %152 = OpCompositeConstruct %151 %150 %99
        %153 = OpCompositeExtract %58 %152 0
        %154 = OpCompositeConstruct %137 %153 %138 %138 %138
        %155 = OpCompositeExtract %58 %154 0
        %156 = OpLogicalAnd %58 %155 %99
        %157 = OpSelect %10 %156 %97 %96
        %158 = OpExtInst %10 %1 FMin %157 %94
        %160 = OpCompositeConstruct %11 %158 %71
        %161 = OpCompositeConstruct %11 %27 %27
        %162 = OpCompositeConstruct %11 %27 %27
        %163 = OpCompositeConstruct %159 %160 %161 %162
        %164 = OpCompositeExtract %10 %163 0 0
        %165 = OpFMul %10 %87 %164
        %166 = OpCompositeConstruct %118 %165 %165 %165
        %167 = OpCompositeExtract %10 %166 0
        %168 = OpCompositeExtract %10 %166 1
        %169 = OpCompositeExtract %10 %166 2
        %170 = OpCompositeConstruct %20 %167 %168 %169 %71
        %171 = OpFSub %20 %170 %28
               OpStore %85 %171
               OpReturn
               OpFunctionEnd
