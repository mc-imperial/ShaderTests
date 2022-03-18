; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 70
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %32 "a"
               OpName %46 "v"
               OpName %52 "gl_FragCoord"
               OpName %64 "buf1"
               OpMemberName %64 0 "zero"
               OpName %66 ""
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %52 BuiltIn FragCoord
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %22 = OpConstant %10 1
         %29 = OpConstant %6 1
         %31 = OpTypePointer Function %10
         %39 = OpConstant %10 7
         %40 = OpTypeBool
         %45 = OpTypePointer Function %7
         %51 = OpTypePointer Input %7
         %52 = OpVariable %51 Input
         %53 = OpConstant %11 0
         %54 = OpTypePointer Input %6
         %57 = OpConstant %6 0
         %64 = OpTypeStruct %10
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %32 = OpVariable %31 Function
         %46 = OpVariable %45 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %23 = OpAccessChain %18 %16 %17 %22
         %24 = OpLoad %10 %23
         %25 = OpConvertSToF %6 %24
         %26 = OpAccessChain %18 %16 %17 %22
         %27 = OpLoad %10 %26
         %28 = OpConvertSToF %6 %27
         %30 = OpCompositeConstruct %7 %21 %25 %28 %29
               OpStore %9 %30
               OpStore %32 %22
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %34
         %34 = OpLabel
         %37 = OpLoad %10 %32
         %38 = OpIAdd %10 %37 %22
               OpStore %32 %38
         %41 = OpSGreaterThanEqual %40 %37 %39
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
               OpBranch %35
         %43 = OpLabel
         %47 = OpLoad %7 %9
               OpStore %46 %47
         %48 = OpLoad %10 %32
         %49 = OpConvertSToF %6 %48
         %50 = OpCompositeConstruct %7 %49 %49 %49 %49
               OpStore %9 %50
         %55 = OpAccessChain %54 %52 %53
         %56 = OpLoad %6 %55
         %58 = OpFOrdGreaterThanEqual %40 %56 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
         %61 = OpLoad %7 %46
               OpStore %9 %61
               OpBranch %60
         %60 = OpLabel
               OpBranch %36
         %36 = OpLabel
         %62 = OpAccessChain %18 %16 %17 %17
         %63 = OpLoad %10 %62
         %67 = OpAccessChain %18 %66 %17
         %68 = OpLoad %10 %67
         %69 = OpSGreaterThan %40 %63 %68
               OpBranchConditional %69 %33 %35
         %35 = OpLabel
               OpReturn
               OpFunctionEnd
