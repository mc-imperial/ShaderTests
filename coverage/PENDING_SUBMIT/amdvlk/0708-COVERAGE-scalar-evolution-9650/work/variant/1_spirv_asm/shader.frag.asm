; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 86
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %66
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %12 "v"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %24 "a"
               OpName %26 "b"
               OpName %66 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %66 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeVector %6 4
         %11 = OpTypePointer Function %10
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 4
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpTypePointer Uniform %6
         %23 = OpTypePointer Function %6
         %25 = OpConstant %6 1
         %35 = OpConstant %6 3
         %36 = OpTypeBool
         %46 = OpConstant %6 10
         %58 = OpTypeVector %36 4
         %63 = OpTypeFloat 32
         %64 = OpTypeVector %63 4
         %65 = OpTypePointer Output %64
         %66 = OpVariable %65 Output
         %67 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %24 = OpVariable %23 Function
         %26 = OpVariable %23 Function
               OpStore %8 %9
         %20 = OpAccessChain %19 %18 %9 %9
         %21 = OpLoad %6 %20
         %22 = OpCompositeConstruct %10 %21 %21 %21 %21
               OpStore %12 %22
               OpStore %24 %25
               OpStore %26 %25
               OpBranch %27
         %27 = OpLabel
               OpLoopMerge %29 %30 None
               OpBranch %28
         %28 = OpLabel
         %31 = OpLoad %6 %8
         %32 = OpIAdd %6 %31 %25
               OpStore %8 %32
         %33 = OpLoad %6 %26
         %34 = OpIAdd %6 %33 %25
               OpStore %26 %34
         %37 = OpSGreaterThanEqual %36 %33 %35
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %39
         %38 = OpLabel
               OpBranch %29
         %39 = OpLabel
         %41 = OpLoad %6 %24
         %42 = OpIAdd %6 %41 %25
               OpStore %24 %42
         %43 = OpLoad %6 %24
         %44 = OpAccessChain %23 %12 %41
               OpStore %44 %43
               OpBranch %30
         %30 = OpLabel
         %45 = OpLoad %6 %8
         %47 = OpSLessThan %36 %45 %46
               OpBranchConditional %47 %27 %29
         %29 = OpLabel
         %48 = OpLoad %10 %12
         %49 = OpAccessChain %19 %18 %9 %9
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %19 %18 %9 %35
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %19 %18 %9 %25
         %54 = OpLoad %6 %53
         %55 = OpAccessChain %19 %18 %9 %9
         %56 = OpLoad %6 %55
         %57 = OpCompositeConstruct %10 %50 %52 %54 %56
         %59 = OpIEqual %58 %48 %57
         %60 = OpAll %36 %59
               OpSelectionMerge %62 None
               OpBranchConditional %60 %61 %81
         %61 = OpLabel
         %68 = OpAccessChain %19 %18 %9 %67
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %63 %69
         %71 = OpAccessChain %19 %18 %9 %9
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %63 %72
         %74 = OpAccessChain %19 %18 %9 %9
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %63 %75
         %77 = OpAccessChain %19 %18 %9 %67
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %63 %78
         %80 = OpCompositeConstruct %64 %70 %73 %76 %79
               OpStore %66 %80
               OpBranch %62
         %81 = OpLabel
         %82 = OpAccessChain %19 %18 %9 %9
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %63 %83
         %85 = OpCompositeConstruct %64 %84 %84 %84 %84
               OpStore %66 %85
               OpBranch %62
         %62 = OpLabel
               OpReturn
               OpFunctionEnd
