; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 104
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %94
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
               OpName %62 "h"
               OpName %94 "_GLF_color"
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %63 RelaxedPrecision
               OpDecorate %65 RelaxedPrecision
               OpDecorate %66 RelaxedPrecision
               OpDecorate %86 RelaxedPrecision
               OpDecorate %88 RelaxedPrecision
               OpDecorate %89 RelaxedPrecision
               OpDecorate %94 Location 0
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
         %34 = OpConstant %10 1
         %35 = OpConstant %10 0
         %36 = OpTypeVector %10 3
         %37 = OpTypeMatrix %36 3
         %51 = OpConstantComposite %20 %34 %34 %34 %34
         %53 = OpTypeInt 32 0
         %54 = OpConstant %53 1
         %74 = OpTypeBool
         %77 = OpConstant %6 32
         %91 = OpConstant %6 1
         %93 = OpTypePointer Output %20
         %94 = OpVariable %93 Output
         %97 = OpConstant %10 0.03125
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %17 = OpVariable %16 Function
         %19 = OpVariable %12 Function
         %26 = OpVariable %16 Function
         %62 = OpVariable %16 Function
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
         %38 = OpCompositeExtract %10 %33 0
         %39 = OpCompositeExtract %10 %33 1
         %40 = OpCompositeExtract %10 %33 2
         %41 = OpCompositeExtract %10 %33 3
         %42 = OpCompositeConstruct %36 %38 %39 %40
         %43 = OpCompositeConstruct %36 %41 %34 %34
         %44 = OpCompositeConstruct %36 %35 %35 %35
         %45 = OpCompositeConstruct %37 %42 %43 %44
         %46 = OpCompositeExtract %10 %45 0 0
         %47 = OpCompositeExtract %10 %45 0 1
         %48 = OpCompositeExtract %10 %45 0 2
         %49 = OpCompositeExtract %10 %45 1 0
         %50 = OpCompositeConstruct %20 %46 %47 %48 %49
         %52 = OpFDiv %20 %50 %51
         %55 = OpCompositeExtract %10 %52 1
               OpStore %26 %55
         %56 = OpLoad %11 %13
         %57 = OpLoad %11 %19
         %58 = OpFSub %11 %57 %56
               OpStore %19 %58
         %59 = OpLoad %10 %17
         %60 = OpLoad %10 %26
         %61 = OpFAdd %10 %60 %59
               OpStore %26 %61
         %63 = OpLoad %28 %30
         %64 = OpLoad %11 %19
         %65 = OpImageSampleImplicitLod %20 %63 %64
         %66 = OpCompositeExtract %10 %65 1
               OpStore %62 %66
               OpBranch %67
         %67 = OpLabel
               OpLoopMerge %69 %70 None
               OpBranch %71
         %71 = OpLabel
         %72 = OpLoad %10 %62
         %73 = OpLoad %10 %26
         %75 = OpFOrdLessThan %74 %72 %73
         %76 = OpLoad %6 %8
         %78 = OpSLessThan %74 %76 %77
         %79 = OpLogicalAnd %74 %75 %78
               OpBranchConditional %79 %68 %69
         %68 = OpLabel
         %80 = OpLoad %11 %13
         %81 = OpLoad %11 %19
         %82 = OpFSub %11 %81 %80
               OpStore %19 %82
         %83 = OpLoad %10 %17
         %84 = OpLoad %10 %26
         %85 = OpFAdd %10 %84 %83
               OpStore %26 %85
         %86 = OpLoad %28 %30
         %87 = OpLoad %11 %19
         %88 = OpImageSampleImplicitLod %20 %86 %87
         %89 = OpCompositeExtract %10 %88 1
               OpStore %62 %89
         %90 = OpLoad %6 %8
         %92 = OpIAdd %6 %90 %91
               OpStore %8 %92
               OpBranch %70
         %70 = OpLabel
               OpBranch %67
         %69 = OpLabel
         %95 = OpLoad %6 %8
         %96 = OpConvertSToF %10 %95
         %98 = OpFMul %10 %96 %97
         %99 = OpCompositeConstruct %36 %98 %98 %98
        %100 = OpCompositeExtract %10 %99 0
        %101 = OpCompositeExtract %10 %99 1
        %102 = OpCompositeExtract %10 %99 2
        %103 = OpCompositeConstruct %20 %100 %101 %102 %34
               OpStore %94 %103
               OpReturn
               OpFunctionEnd
