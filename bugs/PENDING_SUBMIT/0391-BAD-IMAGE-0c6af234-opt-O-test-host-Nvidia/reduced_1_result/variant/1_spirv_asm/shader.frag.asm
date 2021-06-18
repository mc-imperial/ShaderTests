; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 133
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %68
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "uvstep"
               OpName %17 "slope"
               OpName %19 "coord"
               OpName %22 "gl_FragCoord"
               OpName %26 "refh"
               OpName %30 "tex"
               OpName %43 "h"
               OpName %68 "_GLF_color"
               OpDecorate %8 RelaxedPrecision
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %47 RelaxedPrecision
               OpDecorate %50 RelaxedPrecision
               OpDecorate %52 RelaxedPrecision
               OpDecorate %58 RelaxedPrecision
               OpDecorate %63 RelaxedPrecision
               OpDecorate %65 RelaxedPrecision
               OpDecorate %68 Location 0
               OpDecorate %72 RelaxedPrecision
               OpDecorate %75 RelaxedPrecision
               OpDecorate %77 RelaxedPrecision
               OpDecorate %81 RelaxedPrecision
               OpDecorate %82 RelaxedPrecision
               OpDecorate %85 RelaxedPrecision
               OpDecorate %87 RelaxedPrecision
               OpDecorate %91 RelaxedPrecision
               OpDecorate %106 RelaxedPrecision
               OpDecorate %116 RelaxedPrecision
               OpDecorate %118 RelaxedPrecision
               OpDecorate %119 RelaxedPrecision
               OpDecorate %120 RelaxedPrecision
               OpDecorate %122 RelaxedPrecision
               OpDecorate %123 RelaxedPrecision
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
         %27 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %28 = OpTypeSampledImage %27
         %29 = OpTypePointer UniformConstant %28
         %30 = OpVariable %29 UniformConstant
         %34 = OpTypeInt 32 0
         %35 = OpConstant %34 1
         %44 = OpTypeBool
         %45 = OpConstantTrue %44
         %46 = OpTypePointer Function %20
         %54 = OpConstant %10 1
         %55 = OpConstantComposite %20 %54 %54 %54 %54
         %56 = OpConstant %34 0
         %67 = OpTypePointer Output %20
         %68 = OpVariable %67 Output
         %79 = OpConstant %34 2
         %89 = OpConstant %34 3
         %93 = OpTypeVector %44 4
         %94 = OpConstantFalse %44
         %95 = OpConstantComposite %93 %94 %45 %45 %45
        %107 = OpConstant %6 32
        %121 = OpConstant %6 1
        %125 = OpConstant %10 0.03125
        %127 = OpTypeVector %10 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %17 = OpVariable %16 Function
         %19 = OpVariable %12 Function
         %26 = OpVariable %16 Function
         %43 = OpVariable %16 Function
         %47 = OpVariable %46 Function
         %60 = OpVariable %46 Function
         %72 = OpVariable %46 Function
         %82 = OpVariable %46 Function
               OpStore %8 %9
               OpStore %13 %15
               OpStore %17 %18
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
               OpStore %19 %25
         %31 = OpLoad %28 %30
         %32 = OpLoad %11 %19
         %33 = OpImageSampleImplicitLod %20 %31 %32
         %36 = OpCompositeExtract %10 %33 1
               OpStore %26 %36
         %37 = OpLoad %11 %13
         %38 = OpLoad %11 %19
         %39 = OpFSub %11 %38 %37
               OpStore %19 %39
         %40 = OpLoad %10 %17
         %41 = OpLoad %10 %26
         %42 = OpFAdd %10 %41 %40
               OpStore %26 %42
               OpSelectionMerge %49 None
               OpBranchConditional %45 %48 %53
         %48 = OpLabel
         %50 = OpLoad %28 %30
         %51 = OpLoad %11 %19
         %52 = OpImageSampleImplicitLod %20 %50 %51
               OpStore %47 %52
               OpBranch %49
         %53 = OpLabel
               OpStore %47 %55
               OpBranch %49
         %49 = OpLabel
         %57 = OpAccessChain %16 %47 %56
         %58 = OpLoad %10 %57
         %59 = OpCompositeConstruct %20 %58 %54 %54 %54
               OpSelectionMerge %62 None
               OpBranchConditional %45 %61 %66
         %61 = OpLabel
         %63 = OpLoad %28 %30
         %64 = OpLoad %11 %19
         %65 = OpImageSampleImplicitLod %20 %63 %64
               OpStore %60 %65
               OpBranch %62
         %66 = OpLabel
         %69 = OpLoad %20 %68
               OpStore %60 %69
               OpBranch %62
         %62 = OpLabel
         %70 = OpAccessChain %16 %60 %35
         %71 = OpLoad %10 %70
               OpSelectionMerge %74 None
               OpBranchConditional %45 %73 %78
         %73 = OpLabel
         %75 = OpLoad %28 %30
         %76 = OpLoad %11 %19
         %77 = OpImageSampleImplicitLod %20 %75 %76
               OpStore %72 %77
               OpBranch %74
         %78 = OpLabel
               OpStore %72 %55
               OpBranch %74
         %74 = OpLabel
         %80 = OpAccessChain %16 %72 %79
         %81 = OpLoad %10 %80
               OpSelectionMerge %84 None
               OpBranchConditional %45 %83 %88
         %83 = OpLabel
         %85 = OpLoad %28 %30
         %86 = OpLoad %11 %19
         %87 = OpImageSampleImplicitLod %20 %85 %86
               OpStore %82 %87
               OpBranch %84
         %88 = OpLabel
               OpStore %82 %55
               OpBranch %84
         %84 = OpLabel
         %90 = OpAccessChain %16 %82 %89
         %91 = OpLoad %10 %90
         %92 = OpCompositeConstruct %20 %54 %71 %81 %91
         %96 = OpSelect %20 %95 %92 %59
         %97 = OpCompositeExtract %10 %96 1
               OpStore %43 %97
               OpBranch %98
         %98 = OpLabel
               OpLoopMerge %100 %101 None
               OpBranch %102
        %102 = OpLabel
        %103 = OpLoad %10 %43
        %104 = OpLoad %10 %26
        %105 = OpFOrdLessThan %44 %103 %104
        %106 = OpLoad %6 %8
        %108 = OpSLessThan %44 %106 %107
        %109 = OpLogicalAnd %44 %105 %108
               OpBranchConditional %109 %99 %100
         %99 = OpLabel
        %110 = OpLoad %11 %13
        %111 = OpLoad %11 %19
        %112 = OpFSub %11 %111 %110
               OpStore %19 %112
        %113 = OpLoad %10 %17
        %114 = OpLoad %10 %26
        %115 = OpFAdd %10 %114 %113
               OpStore %26 %115
        %116 = OpLoad %28 %30
        %117 = OpLoad %11 %19
        %118 = OpImageSampleImplicitLod %20 %116 %117
        %119 = OpCompositeExtract %10 %118 1
               OpStore %43 %119
        %120 = OpLoad %6 %8
        %122 = OpIAdd %6 %120 %121
               OpStore %8 %122
               OpBranch %101
        %101 = OpLabel
               OpBranch %98
        %100 = OpLabel
        %123 = OpLoad %6 %8
        %124 = OpConvertSToF %10 %123
        %126 = OpFMul %10 %124 %125
        %128 = OpCompositeConstruct %127 %126 %126 %126
        %129 = OpCompositeExtract %10 %128 0
        %130 = OpCompositeExtract %10 %128 1
        %131 = OpCompositeExtract %10 %128 2
        %132 = OpCompositeConstruct %20 %129 %130 %131 %54
               OpStore %68 %132
               OpReturn
               OpFunctionEnd
