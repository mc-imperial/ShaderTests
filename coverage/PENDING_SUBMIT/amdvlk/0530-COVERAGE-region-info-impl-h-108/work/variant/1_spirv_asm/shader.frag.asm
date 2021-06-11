; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 98
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %33 %92
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %23 "buf1"
               OpMemberName %23 0 "two"
               OpName %25 ""
               OpName %33 "gl_FragCoord"
               OpName %52 "i"
               OpName %92 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 1
               OpDecorate %33 BuiltIn FragCoord
               OpDecorate %92 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 3
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 4
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpConstant %16 2
         %19 = OpTypePointer Uniform %6
         %23 = OpTypeStruct %6
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %28 = OpConstant %10 1
         %29 = OpTypePointer Function %6
         %31 = OpTypeVector %6 4
         %32 = OpTypePointer Input %31
         %33 = OpVariable %32 Input
         %34 = OpConstant %10 0
         %35 = OpTypePointer Input %6
         %38 = OpConstant %16 3
         %41 = OpTypeBool
         %50 = OpConstantTrue %41
         %51 = OpTypePointer Function %16
         %53 = OpConstant %16 1
         %86 = OpTypeVector %41 3
         %91 = OpTypePointer Output %31
         %92 = OpVariable %91 Output
         %93 = OpConstant %6 1
         %94 = OpConstant %6 0
         %95 = OpConstantComposite %31 %93 %94 %94 %93
         %97 = OpConstantComposite %31 %94 %94 %94 %94
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %52 = OpVariable %51 Function
         %20 = OpAccessChain %19 %15 %17 %18
         %21 = OpLoad %6 %20
         %22 = OpCompositeConstruct %7 %21 %21 %21
               OpStore %9 %22
         %26 = OpAccessChain %19 %25 %17
         %27 = OpLoad %6 %26
         %30 = OpAccessChain %29 %9 %28
               OpStore %30 %27
         %36 = OpAccessChain %35 %33 %34
         %37 = OpLoad %6 %36
         %39 = OpAccessChain %19 %15 %17 %38
         %40 = OpLoad %6 %39
         %42 = OpFOrdLessThan %41 %37 %40
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %44
         %43 = OpLabel
               OpBranch %45
         %45 = OpLabel
               OpLoopMerge %47 %48 None
               OpBranch %49
         %49 = OpLabel
               OpBranchConditional %50 %46 %47
         %46 = OpLabel
               OpBranch %48
         %48 = OpLabel
               OpBranch %45
         %47 = OpLabel
               OpBranch %44
         %44 = OpLabel
               OpStore %52 %53
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %16 %52
         %60 = OpSLessThan %41 %59 %38
               OpBranchConditional %60 %55 %56
         %55 = OpLabel
         %61 = OpLoad %16 %52
         %62 = OpAccessChain %29 %9 %61
         %63 = OpLoad %6 %62
         %64 = OpAccessChain %19 %15 %17 %18
         %65 = OpLoad %6 %64
         %66 = OpFOrdGreaterThanEqual %41 %63 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
         %69 = OpLoad %16 %52
         %70 = OpAccessChain %29 %9 %28
         %71 = OpLoad %6 %70
         %72 = OpAccessChain %29 %9 %28
         %73 = OpLoad %6 %72
         %74 = OpFMul %6 %71 %73
         %75 = OpAccessChain %29 %9 %69
               OpStore %75 %74
               OpBranch %68
         %68 = OpLabel
               OpBranch %57
         %57 = OpLabel
         %76 = OpLoad %16 %52
         %77 = OpIAdd %16 %76 %53
               OpStore %52 %77
               OpBranch %54
         %56 = OpLabel
         %78 = OpLoad %7 %9
         %79 = OpAccessChain %19 %15 %17 %18
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %19 %15 %17 %17
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %19 %15 %17 %53
         %84 = OpLoad %6 %83
         %85 = OpCompositeConstruct %7 %80 %82 %84
         %87 = OpFOrdEqual %86 %78 %85
         %88 = OpAll %41 %87
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %96
         %89 = OpLabel
               OpStore %92 %95
               OpBranch %90
         %96 = OpLabel
               OpStore %92 %97
               OpBranch %90
         %90 = OpLabel
               OpReturn
               OpFunctionEnd
