; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 120
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %16 %118
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "coord"
               OpName %16 "gl_FragCoord"
               OpName %22 "texel"
               OpName %26 "tex"
               OpName %118 "_GLF_color"
               OpDecorate %8 RelaxedPrecision
               OpDecorate %16 BuiltIn FragCoord
               OpDecorate %26 RelaxedPrecision
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 0
               OpDecorate %27 RelaxedPrecision
               OpDecorate %29 RelaxedPrecision
               OpDecorate %51 RelaxedPrecision
               OpDecorate %66 RelaxedPrecision
               OpDecorate %70 RelaxedPrecision
               OpDecorate %73 RelaxedPrecision
               OpDecorate %76 RelaxedPrecision
               OpDecorate %77 RelaxedPrecision
               OpDecorate %80 RelaxedPrecision
               OpDecorate %85 RelaxedPrecision
               OpDecorate %89 RelaxedPrecision
               OpDecorate %90 RelaxedPrecision
               OpDecorate %91 RelaxedPrecision
               OpDecorate %92 RelaxedPrecision
               OpDecorate %93 RelaxedPrecision
               OpDecorate %95 RelaxedPrecision
               OpDecorate %96 RelaxedPrecision
               OpDecorate %97 RelaxedPrecision
               OpDecorate %98 RelaxedPrecision
               OpDecorate %99 RelaxedPrecision
               OpDecorate %100 RelaxedPrecision
               OpDecorate %101 RelaxedPrecision
               OpDecorate %102 RelaxedPrecision
               OpDecorate %103 RelaxedPrecision
               OpDecorate %104 RelaxedPrecision
               OpDecorate %105 RelaxedPrecision
               OpDecorate %106 RelaxedPrecision
               OpDecorate %107 RelaxedPrecision
               OpDecorate %108 RelaxedPrecision
               OpDecorate %111 RelaxedPrecision
               OpDecorate %112 RelaxedPrecision
               OpDecorate %113 RelaxedPrecision
               OpDecorate %114 RelaxedPrecision
               OpDecorate %116 RelaxedPrecision
               OpDecorate %118 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpTypeVector %10 4
         %15 = OpTypePointer Input %14
         %16 = OpVariable %15 Input
         %19 = OpConstant %10 0.00390625
         %21 = OpTypePointer Function %14
         %23 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %24 = OpTypeSampledImage %23
         %25 = OpTypePointer UniformConstant %24
         %26 = OpVariable %25 UniformConstant
         %35 = OpTypeInt 32 0
         %36 = OpConstant %35 0
         %37 = OpTypePointer Function %10
         %40 = OpConstant %35 1
         %44 = OpConstant %35 2
         %48 = OpConstant %10 1
         %49 = OpTypeBool
         %52 = OpConstant %6 16
         %61 = OpConstant %10 256
         %67 = OpConstantComposite %11 %48 %48
         %81 = OpTypeVector %49 2
         %82 = OpConstantTrue %49
         %83 = OpConstantFalse %49
         %84 = OpConstantComposite %81 %82 %83
         %86 = OpConstant %10 0
         %87 = OpTypeVector %10 3
         %88 = OpTypeMatrix %87 2
         %94 = OpTypeMatrix %87 4
        %115 = OpConstant %6 1
        %117 = OpTypePointer Output %14
        %118 = OpVariable %117 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %22 = OpVariable %21 Function
               OpStore %8 %9
         %17 = OpLoad %14 %16
         %18 = OpVectorShuffle %11 %17 %17 0 1
         %20 = OpVectorTimesScalar %11 %18 %19
               OpStore %13 %20
         %27 = OpLoad %24 %26
         %28 = OpLoad %11 %13
         %29 = OpImageSampleImplicitLod %14 %27 %28
               OpStore %22 %29
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %38 = OpAccessChain %37 %22 %36
         %39 = OpLoad %10 %38
         %41 = OpAccessChain %37 %22 %40
         %42 = OpLoad %10 %41
         %43 = OpFAdd %10 %39 %42
         %45 = OpAccessChain %37 %22 %44
         %46 = OpLoad %10 %45
         %47 = OpFAdd %10 %43 %46
         %50 = OpFOrdGreaterThan %49 %47 %48
         %51 = OpLoad %6 %8
         %53 = OpSLessThan %49 %51 %52
         %54 = OpLogicalAnd %49 %50 %53
               OpBranchConditional %54 %31 %32
         %31 = OpLabel
         %55 = OpLoad %14 %22
         %56 = OpVectorShuffle %11 %55 %55 0 2
         %57 = OpLoad %14 %22
         %58 = OpVectorShuffle %11 %57 %57 1 1
         %59 = OpFAdd %11 %56 %58
               OpStore %13 %59
         %60 = OpLoad %11 %13
         %62 = OpVectorTimesScalar %11 %60 %61
         %63 = OpExtInst %11 %1 Floor %62
         %64 = OpCompositeConstruct %11 %61 %61
         %65 = OpFDiv %11 %63 %64
               OpStore %13 %65
         %66 = OpLoad %24 %26
         %68 = OpAccessChain %37 %13 %40
         %69 = OpLoad %10 %68
         %70 = OpCompositeConstruct %11 %48 %69
         %71 = OpAccessChain %37 %13 %40
         %72 = OpLoad %10 %71
         %73 = OpCompositeConstruct %11 %48 %72
         %74 = OpAccessChain %37 %13 %40
         %75 = OpLoad %10 %74
         %76 = OpCompositeConstruct %11 %48 %75
         %77 = OpExtInst %11 %1 FClamp %70 %73 %76
         %78 = OpAccessChain %37 %13 %36
         %79 = OpLoad %10 %78
         %80 = OpCompositeConstruct %11 %79 %48
         %85 = OpSelect %11 %84 %80 %77
         %89 = OpCompositeExtract %10 %85 0
         %90 = OpCompositeExtract %10 %85 1
         %91 = OpCompositeConstruct %87 %89 %90 %86
         %92 = OpCompositeConstruct %87 %86 %86 %86
         %93 = OpCompositeConstruct %88 %91 %92
         %95 = OpCompositeExtract %10 %93 0 0
         %96 = OpCompositeExtract %10 %93 0 1
         %97 = OpCompositeExtract %10 %93 0 2
         %98 = OpCompositeExtract %10 %93 1 0
         %99 = OpCompositeExtract %10 %93 1 1
        %100 = OpCompositeExtract %10 %93 1 2
        %101 = OpCompositeConstruct %87 %95 %96 %97
        %102 = OpCompositeConstruct %87 %98 %99 %100
        %103 = OpCompositeConstruct %87 %86 %86 %48
        %104 = OpCompositeConstruct %87 %86 %86 %86
        %105 = OpCompositeConstruct %94 %101 %102 %103 %104
        %106 = OpCompositeExtract %87 %105 0
        %107 = OpCompositeExtract %87 %105 1
        %108 = OpCompositeConstruct %88 %106 %107
        %109 = OpCompositeExtract %10 %108 0 0
        %110 = OpCompositeExtract %10 %108 0 1
        %111 = OpCompositeConstruct %11 %109 %110
        %112 = OpFMul %11 %67 %111
        %113 = OpImageSampleImplicitLod %14 %66 %112
               OpStore %22 %113
        %114 = OpLoad %6 %8
        %116 = OpIAdd %6 %114 %115
               OpStore %8 %116
               OpBranch %33
         %33 = OpLabel
               OpBranch %30
         %32 = OpLabel
        %119 = OpLoad %14 %22
               OpStore %118 %119
               OpReturn
               OpFunctionEnd
