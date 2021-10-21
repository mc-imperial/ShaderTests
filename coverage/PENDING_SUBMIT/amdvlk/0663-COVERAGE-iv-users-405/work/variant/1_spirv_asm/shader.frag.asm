; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 80
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %66
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %32 "b"
               OpName %52 "unused"
               OpName %66 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %66 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 4
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %6
         %27 = OpConstant %6 2
         %30 = OpTypeBool
         %40 = OpConstant %6 1
         %43 = OpConstant %6 3
         %56 = OpConstant %6 256
         %61 = OpConstant %6 10
         %63 = OpTypeFloat 32
         %64 = OpTypeVector %63 4
         %65 = OpTypePointer Output %64
         %66 = OpVariable %65 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %32 = OpVariable %10 Function
         %52 = OpVariable %10 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %6 %19
               OpStore %11 %20
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %11
         %28 = OpAccessChain %18 %17 %9 %27
         %29 = OpLoad %6 %28
         %31 = OpSLessThan %30 %26 %29
               OpBranchConditional %31 %22 %23
         %22 = OpLabel
         %33 = OpAccessChain %18 %17 %9 %9
         %34 = OpLoad %6 %33
               OpStore %32 %34
               OpBranch %35
         %35 = OpLabel
               OpLoopMerge %37 %38 None
               OpBranch %36
         %36 = OpLabel
         %39 = OpLoad %6 %8
         %41 = OpIAdd %6 %39 %40
               OpStore %8 %41
         %42 = OpLoad %6 %32
         %44 = OpAccessChain %18 %17 %9 %43
         %45 = OpLoad %6 %44
         %46 = OpSGreaterThanEqual %30 %42 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
               OpBranch %37
         %48 = OpLabel
         %50 = OpLoad %6 %32
         %51 = OpIAdd %6 %50 %40
               OpStore %32 %51
         %53 = OpAccessChain %18 %17 %9 %9
         %54 = OpLoad %6 %53
               OpStore %52 %54
         %55 = OpLoad %6 %11
         %57 = OpSDiv %6 %55 %56
         %58 = OpLoad %6 %32
         %59 = OpIAdd %6 %57 %58
               OpStore %11 %59
               OpBranch %38
         %38 = OpLabel
         %60 = OpLoad %6 %8
         %62 = OpSLessThan %30 %60 %61
               OpBranchConditional %62 %35 %37
         %37 = OpLabel
               OpBranch %24
         %24 = OpLabel
               OpBranch %21
         %23 = OpLabel
         %67 = OpAccessChain %18 %17 %9 %9
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %63 %68
         %70 = OpAccessChain %18 %17 %9 %40
         %71 = OpLoad %6 %70
         %72 = OpConvertSToF %63 %71
         %73 = OpAccessChain %18 %17 %9 %40
         %74 = OpLoad %6 %73
         %75 = OpConvertSToF %63 %74
         %76 = OpAccessChain %18 %17 %9 %9
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %63 %77
         %79 = OpCompositeConstruct %64 %69 %72 %75 %78
               OpStore %66 %79
               OpReturn
               OpFunctionEnd
