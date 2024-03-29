; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 111
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %107
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "arr"
               OpName %18 "i"
               OpName %48 "tex"
               OpName %66 "v"
               OpName %107 "_GLF_color"
               OpDecorate %48 RelaxedPrecision
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 0
               OpDecorate %49 RelaxedPrecision
               OpDecorate %54 RelaxedPrecision
               OpDecorate %56 RelaxedPrecision
               OpDecorate %107 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 32
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %6 1
         %16 = OpConstantComposite %12 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15
         %17 = OpTypePointer Function %6
         %19 = OpConstant %6 2
         %26 = OpConstant %6 16
         %27 = OpTypeBool
         %30 = OpConstant %6 50
         %44 = OpTypeFloat 32
         %45 = OpTypeImage %44 2D 0 0 0 1 Unknown
         %46 = OpTypeSampledImage %45
         %47 = OpTypePointer UniformConstant %46
         %48 = OpVariable %47 UniformConstant
         %50 = OpTypeVector %44 2
         %51 = OpConstant %44 1
         %52 = OpConstantComposite %50 %51 %51
         %53 = OpTypeVector %44 4
         %55 = OpConstant %10 3
         %57 = OpConstant %44 0
         %64 = OpTypeVector %6 2
         %65 = OpTypePointer Function %64
         %67 = OpConstantComposite %64 %15 %15
         %73 = OpConstant %10 0
         %76 = OpConstant %10 1
         %99 = OpConstant %6 17
        %106 = OpTypePointer Output %53
        %107 = OpVariable %106 Output
        %108 = OpConstantComposite %53 %51 %57 %57 %51
        %110 = OpConstantComposite %53 %57 %57 %57 %57
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %18 = OpVariable %17 Function
         %66 = OpVariable %65 Function
               OpStore %8 %9
               OpStore %14 %16
               OpStore %18 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %18
         %28 = OpSLessThan %27 %25 %26
         %29 = OpLoad %6 %8
         %31 = OpSLessThan %27 %29 %30
         %32 = OpLogicalAnd %27 %28 %31
               OpBranchConditional %32 %21 %22
         %21 = OpLabel
         %33 = OpLoad %6 %8
         %34 = OpIAdd %6 %33 %15
               OpStore %8 %34
         %35 = OpLoad %6 %18
         %36 = OpAccessChain %7 %14 %35
               OpStore %36 %9
               OpBranch %23
         %23 = OpLabel
         %37 = OpLoad %6 %18
         %38 = OpIAdd %6 %37 %15
               OpStore %18 %38
               OpBranch %20
         %22 = OpLabel
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %43
         %43 = OpLabel
         %49 = OpLoad %46 %48
         %54 = OpImageSampleImplicitLod %53 %49 %52
         %56 = OpCompositeExtract %44 %54 3
         %58 = OpFOrdGreaterThan %27 %56 %57
         %59 = OpLoad %6 %8
         %60 = OpSLessThan %27 %59 %30
         %61 = OpLogicalAnd %27 %58 %60
               OpBranchConditional %61 %40 %41
         %40 = OpLabel
         %62 = OpLoad %6 %8
         %63 = OpIAdd %6 %62 %15
               OpStore %8 %63
               OpStore %66 %67
         %68 = OpAccessChain %7 %14 %15
         %69 = OpLoad %6 %68
         %70 = OpIEqual %27 %69 %15
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %72
         %71 = OpLabel
         %74 = OpAccessChain %17 %66 %73
         %75 = OpLoad %6 %74
         %77 = OpAccessChain %17 %66 %76
         %78 = OpLoad %6 %77
         %79 = OpIMul %6 %78 %26
         %80 = OpIAdd %6 %75 %79
         %81 = OpAccessChain %7 %14 %80
               OpStore %81 %19
               OpBranch %72
         %72 = OpLabel
               OpBranch %42
         %42 = OpLabel
               OpBranch %39
         %41 = OpLabel
         %82 = OpAccessChain %7 %14 %9
         %83 = OpLoad %6 %82
         %84 = OpIEqual %27 %83 %15
               OpSelectionMerge %86 None
               OpBranchConditional %84 %85 %86
         %85 = OpLabel
         %87 = OpAccessChain %7 %14 %15
         %88 = OpLoad %6 %87
         %89 = OpIEqual %27 %88 %15
               OpBranch %86
         %86 = OpLabel
         %90 = OpPhi %27 %84 %41 %89 %85
               OpSelectionMerge %92 None
               OpBranchConditional %90 %91 %92
         %91 = OpLabel
         %93 = OpAccessChain %7 %14 %19
         %94 = OpLoad %6 %93
         %95 = OpIEqual %27 %94 %9
               OpBranch %92
         %92 = OpLabel
         %96 = OpPhi %27 %90 %86 %95 %91
               OpSelectionMerge %98 None
               OpBranchConditional %96 %97 %98
         %97 = OpLabel
        %100 = OpAccessChain %7 %14 %99
        %101 = OpLoad %6 %100
        %102 = OpIEqual %27 %101 %19
               OpBranch %98
         %98 = OpLabel
        %103 = OpPhi %27 %96 %92 %102 %97
               OpSelectionMerge %105 None
               OpBranchConditional %103 %104 %109
        %104 = OpLabel
               OpStore %107 %108
               OpBranch %105
        %109 = OpLabel
               OpStore %107 %110
               OpBranch %105
        %105 = OpLabel
               OpReturn
               OpFunctionEnd
